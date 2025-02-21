import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { Admin, User, Course, Invoice, Learner } from "@/types/types";

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

const admins: Admin[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        contact: "123-456-7890",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "password123",
        contact: "098-765-4321",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        contact: "555-666-7777",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const users: User[] = [
    {
        id: 1,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        password: "password123",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to Programming",
        price: 99.99,
        duration: "4 weeks",
        instructor: "Dr. Smith",
        learners: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        price: 149.99,
        duration: "6 weeks",
        instructor: "Prof. Johnson",
        learners: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        title: "Data Structures and Algorithms",
        price: 199.99,
        duration: "8 weeks",
        instructor: "Dr. Brown",
        learners: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const invoices: Invoice[] = [
    {
        id: 1,
        learnerId: 1,
        amount: 200.00,
        date: new Date(),
        status: "Paid",
        details: "Payment for course enrollment",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        learnerId: 2,
        amount: 250.00,
        date: new Date(),
        status: "Pending",
        details: "Payment for course enrollment",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        learnerId: 3,
        amount: 300.00,
        date: new Date(),
        status: "Paid",
        details: "Payment for course enrollment",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

const learners: Learner[] = [
    {
        id: 1,
        firstName: "Charlie",
        lastName: "Williams",
        email: "charlie.williams1@example.com",
        program: "Computer Science",
        gender: "Male",
        location: "New York",
        phone: "777-888-9991",
        disabled: false,
        image: "https://github.com/shadcn.png",
        description: "A dedicated learner",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        firstName: "Diana",
        lastName: "Evans",
        email: "diana.evans1@example.com",
        program: "Data Science",
        gender: "Female",
        location: "San Francisco",
        phone: "000-111-2221",
        disabled: false,
        image: "https://github.com/shadcn.png",
        description: "An enthusiastic learner",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        firstName: "Eve",
        lastName: "Miller",
        email: "eve.miller1@example.com",
        program: "Software Engineering",
        gender: "Female",
        location: "Los Angeles",
        phone: "333-444-5555",
        disabled: false,
        image: "https://github.com/shadcn.png",
        description: "A passionate learner",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

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
        await prisma.admin.deleteMany({});
        await prisma.user.deleteMany({});
        await prisma.course.deleteMany({});
        await prisma.learner.deleteMany({});
        await prisma.invoice.deleteMany({});

        await prisma.admin.createMany({ data: hashedAdmins });
        await prisma.user.createMany({ data: hashedUsers });
        await prisma.course.createMany({ data: courses });
        await prisma.learner.createMany({ data: learners });
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
