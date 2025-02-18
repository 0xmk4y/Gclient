import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const invoices = await prisma.invoice.findMany({
            include: {
                learner: true,
            },
        });
        console.log(invoices);
        return new Response(JSON.stringify(invoices), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}