import React from 'react'
import { Mail, LockKeyhole, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div className='flex'>
        <div className='bg-primary h-screen hidden md:block'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptates.</p>
        </div>

        <div className='flex flex-col md:w-full p-3'>
            <div className='flex flex-col mb-8'>
                <Image 
                    src={'/logo.svg'}
                    alt='logo'
                    height={100}
                    width={100}
                />
                <div className='mt-4'>
                    <Button variant={'outline'}><ChevronLeft className='inline' size={16} />Back</Button>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='text-center mb-10'>
                    <p>Enter the verification code we sent to your email</p>
                    <p className='font-bold'>{"admindemo@gmail.com"}</p>
                </div>
                <h3 className='font-bold text-white md:text-black text-[27px] w-full text-center p-2'>OTP verification</h3>
                <form action="" className='text-sm w-full md:max-w-[400px] p-3 bg-white'>
                    <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-6 bg-gray-100'>
                        <input type="number" placeholder='12345' className='text-gray-500 p-2 w-full focus:ring-0 outline-none bg-transparent' />
                    </div>
                    <div className='w-full mb-10'>
                        <button className='bg-primary text-white py-2 px-4 w-full'>
                            Verify
                            <ChevronRight className='inline ml-2' size={16} />
                        </button>
                    </div>
                </form>
            </div>
            <p className='text-center mt-4'>Didn't you receive the OTP? <Link href={"/"} className='md:text-primary underline font-bold'>Resend OTP</Link> </p>
        </div>
    </div>
  )
}
