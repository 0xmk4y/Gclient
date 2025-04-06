import React from 'react'
import { Mail, LockKeyhole, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SideBar from '../../components/SideBar';

export default function page() {
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex flex-col w-full p-3'>
            <div className='flex flex-col mb-12'>
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
                <h3 className='font-bold text-white md:text-black text-[27px] w-full text-center p-2 mb-2'>Enter your email address</h3>
                <form action="" className='text-sm w-full md:max-w-[400px] p-3 bg-white'>
                    <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-6 bg-gray-100'>
                        <Mail className='mx-1 dark:text-primary' />
                        <input type="text" placeholder='Email' className='p-2 w-full focus:ring-0 outline-none bg-transparent' />
                    </div>
                    <div className='w-full mb-10'>
                        <button className='bg-primary text-white py-2 px-4 w-full'>
                            Reset password
                            <ChevronRight className='inline ml-2' size={16} />
                        </button>
                    </div>
                    <p className='w-full text-center'>Having trouble logging in? <Link href={"/"} className=''>Contact support</Link> </p>
                </form>
            </div>
        </div>
    </div>
  )
}
