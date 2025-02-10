import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    console.log("Signup API");
    const { firstName, lastName, email, password, confirmPass, contact } = await req.json();

    if (!firstName || !lastName || !email || !password || !confirmPass || !contact) {
        return new Response(
            JSON.stringify({ message: "All fields are required" }),
            { status: 400 }
        );
    }

    if (password !== confirmPass) {
        return new Response(
            JSON.stringify({ message: "Passwords do not match" }),
            { status: 400 }
        );
    }

    try {
        const existingUser = await prisma.admin.findUnique({
            where: { email },
        });

        if (existingUser) {
            return new Response(JSON.stringify({ message: "User already exists" }), {
                status: 409,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
                contact,
            },
        });

        return new Response(JSON.stringify({ message:"User created successfull", id: newAdmin.id, first_name: newAdmin.firstName, last_name: newAdmin.lastName, email: newAdmin.email, contact: newAdmin.contact }), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
        });
    }
}
