"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <div className='bg-[#01589A] text-white p-4'>
        <div className='md:mx-[200px]'>
            <div className='flex flex-col md:flex-row justify-between md:items-center py-8'>
                <div>
                    <Image
                        src={'/logo.svg'}
                        alt=''
                        height={400}
                        width={400}
                        className='w-[200px] mb-10 md:w-[300px]'
                    />  
                </div>
                <div className='flex flex-col md:flex-row gap-8 text-sm'>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold text-lg'>Menu</li>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/courses'>Courses</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold text-lg'>Contact</li>
                        <li>+23341002000</li>
                        <li>New Reiss, Ghana, Accra</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-bold text-lg'>Social</li>
                        <li><Link href='https://www.linkedin.com'>LinkedIn</Link></li>
                        <li><Link href='https://www.facebook.com'>Facebook</Link></li>
                    </ul>
                </div>
            </div>
            <hr className='border-1'/>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
                <p className='text-center'>&copy copyright 2025 - G-client, All rights reserved</p>
                <div className='flex items-center'>
                    <Link href={'#'} onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>Back to top</Link>
                    <ArrowUp />
                </div>
            </div>
        </div>
    </div>
  )
}
