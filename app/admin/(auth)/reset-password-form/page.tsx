import React from 'react'
import { Mail, LockKeyhole, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SideBar from '../../components/SideBar';

export default function page() {
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex flex-col w-full p-3'>
            <div className='flex justify-end items-end w-full mb-[50px] space-x-3'>
                <Link href={"/"} className='underline'>Need to create an account ?</Link>
                <button className='bg-white text-primary md:bg-primary md:text-white py-1 px-2 font-bold'>Sign Up <ChevronRight className='inline mb-1' size={16} /></button>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <h3 className='font-bold text-white md:text-black text-[27px] mb-4 w-full text-center p-2'>Create New Password</h3>
                <form action="" className='text-sm w-full md:max-w-[400px] p-3 bg-white'>
                    <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                        <LockKeyhole className='mx-1 dark:text-primary' />
                        <input type="password" placeholder='New password' className='p-2 w-full focus:ring-0 outline-none bg-transparent' />
                    </div>
                    <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-4 bg-gray-100  '>
                        <LockKeyhole className='mx-1 dark:text-primary'/>
                        <input type="password" placeholder='Confirm paswword' className='p-2 w-full focus:ring-0 outline-none bg-transparent' />
                    </div>
                    <div className='w-full mb-4'>
                        <button className='bg-primary text-white py-2 px-4 mt-8 w-full'>
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
