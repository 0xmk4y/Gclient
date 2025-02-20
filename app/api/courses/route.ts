import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const courses = await prisma.course.findMany();
        console.log(courses);
        return new Response(JSON.stringify(courses), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}