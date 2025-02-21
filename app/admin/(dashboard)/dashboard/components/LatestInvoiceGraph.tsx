import React from 'react'
import Image from 'next/image';
import { PrismaClient } from '@prisma/client';
import { Invoice } from '@/types/types';
const prisma = new PrismaClient();


async function getInvoices(): Promise<Invoice[]> {
  try{
    const Invoices = await prisma.invoice.findMany({
      include: {
        learner: true,
      },
    });
    console.log(Invoices);
    return Invoices;
  } catch (error) {
    console.error("Error fetching Invoices:", error);
    return [];
  }
}


export default async function LatestInvoiceGraph() {
    const invoice = await getInvoices();
  return (
    <div className='flex bg-gray-100 p-3 min-h-full rounded-md '>
        <div className='flex flex-col gap-4 border w-full bg-white'>
            {invoice.map((invoice: Invoice) => (
                <div key={invoice.id}>
                    <div className='flex justify-between items-center px-3 py-1 hover:bg-gray-100 pb-2'>
                        <div className='flex items-center gap-8'>
                            <Image 
                                src={invoice.learner.image}
                                alt=''
                                width={40}
                                height={40}
                                className='rounded-full'
                            />
                            <div className=''>
                                <p className='font-bold'>{invoice.learner.firstName + " " + invoice.learner.lastName}</p>
                                <p>Software Engineering</p>
                            </div>
                        </div>
                        <p className='font-bold'>$ {invoice.amount}</p>
                    </div>
                    <hr className='mx-4 '/>
                </div>
            ))}
        </div>
    </div>
  )
}
