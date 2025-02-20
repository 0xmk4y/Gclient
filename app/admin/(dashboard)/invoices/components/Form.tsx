"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Calendar, UsersRound, BadgeCent, Pencil, ChevronRight } from "lucide-react";
import { Learner } from '@/types/types';

async function getLearners(): Promise<Learner[]> {
  try {
    const response = await fetch('/api/learners');
    return await response.json();
  } catch (error) {
    console.error("Error fetching learners:", error);
    return [];
  }
}

export default function Form() {
  const [learners, setLearners] = useState<Learner[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    getLearners().then(setLearners);
  }, []);

  async function createInvoice(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const learnerId = parseInt(formData.get("course") as string, 10);
    const amount = parseFloat(formData.get("amount") as string);
    const date = new Date(formData.get("date") as string).toISOString();
    const status = formData.get("status") as string;
    const details = formData.get("details") as string;

    try {
      const response = await fetch('/api/invoices/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          learnerId,
          amount,
          date,
          status,
          details,
        }),
      });

      if (response.ok) {
        router.push('/admin/invoices');
      } else {
        console.error("Failed to create invoice:", await response.text());
      }
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-2 md:p-4 mt-10">
      <form onSubmit={createInvoice} method="POST" className="w-full flex flex-col gap-4">
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <UsersRound size={20} />
          <select name="course" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
            <option value="" disabled>Select Learner</option>
            {learners.map((learner) => (
              <option key={learner.id} value={learner.id}>{learner.firstName + " " + learner.lastName}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <BadgeCent size={20} />
          <input type="text" name="amount" className="bg-transparent border-none focus:outline-none p-2" placeholder="Enter amount in USD" />
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <Calendar size={20} />
          <input type="date" name="date" className="bg-transparent border-none focus:outline-none p-2" placeholder="Collection date" />
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <UsersRound size={20} />
          <select name="status" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <Pencil size={20} />
          <textarea name="details" className="bg-transparent border-none focus:outline-none p-2 w-full" placeholder="Payment details"></textarea>
        </div>
        <div className='w-full flex justify-end'>
          <div className='flex gap-4'>
            <Button variant={'outline'} className='bg-gray-100'>Cancel <ChevronRight /></Button>
            <Button type="submit" className='text-white'>Create Invoice <ChevronRight /></Button>
          </div>
        </div>
      </form>
    </div>
  );
}
