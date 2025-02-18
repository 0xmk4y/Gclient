"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router';
import { Calendar,  UsersRound, BadgeCent, Pencil, ChevronRight } from "lucide-react";


export default function Form() {
    // const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          program: formData.get('program'),
          gender: formData.get('gender'),
          location: formData.get('location'),
          phone: formData.get('phone'),
          disabled: formData.get('disabled') === 'yes',
          amount: parseFloat(formData.get('amount') as string),
          image: formData.get('image'),
          description: formData.get('description'),
        };
      
        const response = await fetch('/api/create-invoice', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      
        if (response.ok) {
          // Handle successful creation
          console.log('Learner created successfully');
          router.push('/admin/dashboard');
        } else {
          // Handle creation error
          console.error('Failed to create learner');
        }
      };
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-2 md:p-4 mt-10">
          <form action="" className="w-full flex flex-col gap-4">
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
                <UsersRound  size={20}/>
                <select name="program" id="program" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
                  <option value="" disabled selected className="text-gray-100">Select Learner</option>
                  <option value="course1">Yes</option>
                  <option value="course2">No</option>
                </select>
            </div>
            {/*  */}
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
                <BadgeCent size={20}/>
                <input type="text" name="amount" id="amount" className="bg-transparent border-none focus:outline-none p-2" placeholder="Enter amount in USD"/>
            </div>
            {/*  */}
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
                <Calendar size={20}/>
                <input type="date" name="date" id="date" className="bg-transparent border-none focus:outline-none p-2" placeholder="Collection date"/>
            </div>
            {/*  */}
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
                <UsersRound  size={20}/>
                <select name="status" id="status" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
                  <option value="" disabled selected className="text-gray-100">Status</option>
                  <option value="Paid">Yes</option>
                  <option value="Pending">No</option>
                </select>
            </div>
            <div>
                <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
                    <Pencil size={20} />
                    <textarea cols={1} rows={1}
                        name="description"
                        id="description"
                        className="bg-transparent border-none focus:outline-none p-2 w-full"
                        placeholder="Payment description"
                    ></textarea>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <div className='flex gap-4'>
                    <Button variant={'outline'} className='bg-gray-100'>Cancel <ChevronRight /></Button>
                    <Button className='text-white'>Create Leaner <ChevronRight /></Button>
                </div>
            </div>
          </form>
      </div>
  )
}
