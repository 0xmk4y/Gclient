import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("Login API");
  const { email, password } = await req.json();
  console.log(email);

  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required" }),
      { status: 400 }
    );
  }

  try {
    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return new Response(JSON.stringify({ message: "Admin not found" }), {
        status: 404,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({id: admin.id, first_name: admin.firstName, last_name: admin.lastName, email: admin.email, contact: admin.contact }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
