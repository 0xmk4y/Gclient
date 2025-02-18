import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request,) {
    const { id } = await req.json();

    const learner = await prisma.learner.findUnique({
        where: { id: Number(id) },
    });

    if (!learner) {
        return new Response('Learner not found', { status: 404 });
    }

    return new Response(JSON.stringify(learner), { status: 200 });
}