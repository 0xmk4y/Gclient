import { User, Lock, Mail, MapPin, GraduationCap, UsersRound, Phone, BadgeCent, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Form() {
  return (
    <div className='md:mx-[70px] mt-10 flex justify-center items-center'>
        <form action="" className='text-gray-600 text-[16px]'>
            <h3 className='font-bold text-[20px] md:text-[30px] text-black mb-4'>Start new application</h3>
            {/*  */}
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                    <User size={20} />
                    <input type="text" name='first_name' className='border-none bg-transparent focus:outline-none px-2' placeholder='first name'/>
                </div>
                <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                    <Lock size={20} />
                    <input type="password" name='password' className='border-none bg-transparent focus:outline-none px-2' placeholder='Last name'/>
                </div>
            </div>

            {/*  */}
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                    <Mail size={20} />
                    <input type="text" name='email' className='border-none bg-transparent focus:outline-none px-2' placeholder='Email'/>
                </div>
                <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                    <MapPin size={20}/>
                    <input type="text" name='location' className='border-none bg-transparent focus:outline-none px-2' placeholder='Location'/>
                </div>
            </div>

            {/*  */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full">
              <div className="flex items-center border w-full bg-gray-100 rounded-md px-2 ">
                <GraduationCap  size={20} />
                <select name="course" id="course" className="bg-transparent border-none focus:outline-none p-2 w-full">
                  <option value="" disabled selected className="">Select Program</option>
                  <option value="course1">Course 1</option>
                  <option value="course2">Course 2</option>
                  <option value="course3">Course 3</option>
                </select>
              </div>
              <div className="flex items-center border w-full bg-gray-100 rounded-md px-2">
                <GraduationCap  size={20}/>
                <select name="gender" id="gender" className="bg-transparent border-none focus:outline-none p-2 w-full">
                  <option value="" disabled selected className="">Gender</option>
                  <option value="male">Male</option>
                  <option value="femail">Female</option>
                </select>
              </div>
            </div>

            {/*  */}
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                <div className="flex items-center border w-full bg-gray-100 rounded-md px-2">
                    <UsersRound  size={20}/>
                    <select name="diasable" id="diasable" className="bg-transparent border-none focus:outline-none p-2 w-full">
                    <option value="" disabled selected className="">Disabled</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select>
                </div>
                <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                    <Phone size={20} />
                    <input type="text" name='phone' className='border-none bg-transparent focus:outline-none px-2' placeholder='Phone'/>
                </div>
            </div>

            {/*  */}
            <div className="w-full items-center gap-1.5 bg-gray-100 mb-3 md:mb-6">
                <Input type="file" />
            </div>

            {/*  */}
            <div className="flex items-center border w-full bg-gray-100 px-2 py-1 rounded-md mb-3 md:mb-6 "> 
                <BadgeCent size={20}/>
                <input type="text" name="amount" id="amount" className="border-none bg-transparent focus:outline-none px-2 w-full" placeholder="Amount"/>
            </div>

            {/*  */}
            <div>
                <div className="flex items-center border w-full bg-gray-100 px-2 py-1 rounded-md">
                    <textarea cols={5} rows={5}
                        name="description"
                        id="description"
                        className="bg-transparent border-none focus:outline-none p-2 w-full"
                        placeholder="Description"
                    ></textarea>
                </div>
            </div>

            {/* Submit button */}
            <div className='flex gap-4 my-10'>
                <Link href={"/user/dashboard"} className="flex items-center gap-2 text-sm px-8 py-2 font-bold bg-gray-100 text-gray-600 hover:bg-gray-300 shadow-none" >
                    <ChevronLeft size={20} />
                    <p>Back</p>
              </Link>
                <Button className='px-8 py-1 shadow-none font-bold'>
                    <p>Register</p>
                    <ChevronRight size={20} />
                </Button>
            </div>
        </form>
    </div>
  )
}
