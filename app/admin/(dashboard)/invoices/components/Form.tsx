import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
import { User2, Mail, GraduationCap, MapPin, Phone, Calendar,  UsersRound, BadgeCent, Pencil, ChevronRight } from "lucide-react";


export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-gray-100 p-2 md:p-4 mt-10">
          <form action="" className="w-full flex flex-col gap-4">
            <div className="flex items-center border-b-2 border-b-primary w-full bg-white px-2">
                <UsersRound  size={20}/>
                <select name="course" id="course" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
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
                <select name="course" id="course" className="text-gray-400 bg-transparent border-none focus:outline-none p-2 w-full">
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
