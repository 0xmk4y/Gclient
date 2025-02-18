// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// interface Learner {
//     id: number;
//     firstName: string;
//     lastName: string;
//     email: string;
//     program: string;
//     gender: string;
//     location: string;
//     phone: string;
//     disabled: boolean;
//     amount: number;
//     image: string;
//     description: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// export async function POST(req: Request) {
//     const { firstName, lastName, email, program, gender, location, phone, disabled, amount, image, description } = await req.json() as Learner;
    
//     try {
//         const learner = await prisma.learner.create({
//             data: {
//                 firstName,
//                 lastName,
//                 email,
//                 program,
//                 gender,
//                 location,
//                 phone,
//                 disabled,
//                 amount,
//                 image,
//                 description,
//             },
//         });

//         return new Response(JSON.stringify({ learner, message: 'Learner created successfully' }), { status: 201 });
//     } catch (error) {
//         console.error('Failed to create learner:', error);
//         return new Response(JSON.stringify({ message: 'Failed to create learner' }), { status: 500 });
//     }
// }