import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

interface programProp{
    logo: string
    program: string
    price: number
    duration: string
    instructor: string
    learners: number
}
export default function programCard({ logo, program, price, duration, instructor, learners}: programProp) {
  return (
    <div className='w-full md:max-w-[300px] border shadow-md'>
        <Image 
            src={logo}
            alt="program"
            width={300}
            height={200}
            className='w-full'
        />
        <div className='px-4'>
            <h3 className='my-4 font-bold text-[20px] h-[35px] leading-1'>{program}</h3>
            <div className='w-full'>
                <div className='flex justify-between items-center border-b py-2'>
                    <p>Price:</p>
                    <p className='font-bold'>$ {price}</p>
                </div>
                <div className='flex justify-between items-center border-b py-2'>
                    <p>Duration:</p>
                    <p className='font-bold'>{duration}</p>
                </div>
                <div className='flex justify-between items-center border-b py-2'>
                    <p>Instructor:</p>
                    <p className='font-bold'>{instructor}</p>
                </div>
                <div className='flex justify-between items-center py-2'>
                    <p>Learners:</p>
                    <p className='font-bold'>{learners}</p>
                </div>
            </div>
        <Button className='text-white font-bold my-3'>View More <ChevronRight /></Button>
        </div>
    </div>
  )
}
