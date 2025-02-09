import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { admins, users, courses, invoices } from "../dummy/db"; // Ensure correct path

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function hashPassword(password: string) {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

async function main() {
    console.log("Seeding database...");

    try {
        const hashedAdmins = await Promise.all(
            admins.map(async (admin) => ({
                ...admin,
                password: await hashPassword(admin.password),
            }))
        );

        const hashedUsers = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await hashPassword(user.password),
            }))
        );

        await prisma.admin.createMany({ data: hashedAdmins });
        await prisma.user.createMany({ data: hashedUsers });
        await prisma.course.createMany({ data: courses });
        await prisma.invoice.createMany({ data: invoices });

        console.log("Seeding completed!");
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
