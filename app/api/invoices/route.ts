import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// fetch all invoices
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

// Delete invoice
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json()
        if (!id) {
            return new Response('Invoice ID is required', { status: 400 });
        }
        const invoice = await prisma.invoice.delete({
            where: {
                id: Number(id),
            },
        });
        return new Response(JSON.stringify(invoice), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}