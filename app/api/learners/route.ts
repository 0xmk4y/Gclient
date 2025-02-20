import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(){
    try {
        const learners = await prisma.learner.findMany();
        return new Response(JSON.stringify(learners), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { id } = await req.json()
        if (!id) {
            return new Response('Learner ID is required', { status: 400 });
        }
        console.log(id)

        const invoices = await prisma.invoice.findMany({
            where: {
            learnerId: id
            }
        });

        for (const invoice of invoices) {
            await prisma.invoice.delete({
            where: {
                id: invoice.id
            }
            });
        }

        const learner = await prisma.learner.delete({
            where: {
            id: Number(id),
            },
        });
        return new Response(JSON.stringify(learner), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Internal Server Error', { status: 500 });
    }
}