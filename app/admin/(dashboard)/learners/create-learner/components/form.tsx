"use client";
import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input" 
import { User2, Mail, GraduationCap, MapPin, Phone, UsersRound, BadgeCent, Pencil, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Course } from '@/types/types';



export default function Form() {
  async function getCourses(): Promise<Course[]> {
    try {
      const response = await fetch('/api/courses');
      return await response.json();
    } catch (error) {
      console.error("Error fetching learners:", error);
      return [];
    }
  }
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ allCourses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    getCourses().then(setCourses);
    }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
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
  
    const response = await fetch('/api/learners/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      // Handle successful creation
      console.log('Learner created successfully');
      router.push('/admin/learners');
    } else {
      // Handle creation error
      console.error('Failed to create learner');
    }
    setIsLoading(false);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-2 md:p-4 mt-10">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center w-full gap-4">
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
            <User2 size={20}/> 
            <input type="text" name="firstName" id="firstName" className="bg-transparent border-none focus:outline-none p-2" placeholder="First Name" required/>
          </div>
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
            <User2 size={20}/> 
            <input type="text" name="lastName" id="lastName" className="bg-transparent border-none focus:outline-none p-2" placeholder="Last Name" required/>
          </div>
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
          <Mail size={20}/> 
          <input type="text" name="email" id="email" className="bg-transparent border-none focus:outline-none p-2" placeholder="Email" required/>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
            <GraduationCap size={20} />
            <select name="program" id="program" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full" required>
              <option value="" disabled selected className="text-gray-100">Select Program</option>
              {allCourses.map((course) => (
              <option key={course.id} value={course.id}>{course.title}</option>
              ))}
            </select>
            </div>
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
            <GraduationCap size={20}/>
            <select name="gender" id="gender" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full" required>
              <option value="" disabled selected className="text-gray-100">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
            <MapPin size={20} />
            <input type="text" name="location" id="location" className="bg-transparent border-none focus:outline-none p-2" placeholder="Location" required/>
          </div>
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
            <Phone size={20}/>
            <input type="text" name="phone" id="phone" className="bg-transparent border-none focus:outline-none p-2" placeholder="Phone" required/>
          </div>
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
          <UsersRound size={20}/>
          <select name="disabled" id="disabled" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full" required>
            <option value="" disabled selected className="text-gray-100">Disabled</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2"> 
          <BadgeCent size={20}/>
          <input type="text" name="amount" id="amount" className="bg-transparent border-none focus:outline-none p-2" placeholder="Amount" required/>
        </div>
        <div className="w-full items-center gap-1.5 bg-white">
          {/* Update image */}
          <Input type="text" name='image' required /> 
        </div>
        <div>
          <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
            <Pencil size={20} />
            <textarea cols={1} rows={1}
              name="description"
              id="description"
              className="bg-transparent border-none focus:outline-none p-2 w-full"
              placeholder="Description"
              required
            ></textarea>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <div className='flex gap-4'>
            <Button variant={'outline'} className='bg-gray-100'>Cancel <ChevronRight /></Button>
            <Button type="submit" className='text-white'>{isLoading ? 'Creating..' : 'Create Learner'} <ChevronRight /></Button>
          </div>
        </div>
      </form>
    </div>
  )
}
