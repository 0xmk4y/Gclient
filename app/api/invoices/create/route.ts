import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { learnerId, amount, date, status, details }: { learnerId: number, amount: number, date: string, status: string, details: string } = await req.json();

    if (!learnerId || !amount || !date || !status || !details) {
        return new Response('All fields are required', { status: 400 });
    }
    try {
        const newInvoice = await prisma.invoice.create({
            data: {
                learnerId,
                amount,
                date: date,
                status,
                details,
            },
        });
        return new Response(JSON.stringify(newInvoice), { status: 201 });

    } catch (error) {
        return new Response('Error creating invoice', { status: 500 });
    }
}