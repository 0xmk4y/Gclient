"use client";
import React from 'react'
import HomeSideBar from './Home-SideBar'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'
import SignUpModal from '@/Modal/SignUpModal'

import { useState } from 'react'

export default function NavBar() {
    const [loginModal, setloginModal] = useState(false)

  return (
    <div className='flex items-center'>
        {/* Desktop */}
        <div className='hidden md:flex w-full gap-8 items-center justify-between mx-[200px]'>
            <div className='flex items-center'>
                <Image
                    src='/logo-2.svg'
                    alt='logo'
                    width={100}
                    height={100}
                    className='p-4'
                />
                <div className='flex gap-8'>
                    <Link href={"#"}>Home</Link>
                    <Link href={"#"}>Courses</Link>
                </div>
            </div>
            <Button className='max-w-[100px] shadow-none text-white font-bold rounded-md' onClick={() => setloginModal(true)}>Login <span><LogIn /></span></Button>
            {loginModal && <SignUpModal />}
        </div>

        {/* Mobile */}
        <div className='w-full flex justify-between md:hidden'>
            <Image
                src='/logo-2.svg'
                alt='logo'
                width={100}
                height={100}
                className='p-4'
            />
            <HomeSideBar />
        </div>
    </div>
  )
}
