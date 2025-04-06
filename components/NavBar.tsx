"use client";
import React, { useState } from 'react';
import HomeSideBar from './Home-SideBar';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { LogIn } from 'lucide-react';
import useLoginModalStore from '@/store/LoginModal';
import { useModalStore } from '@/Store/ModalStore';
import SignUpModal from '@/Modal/SignUpModal';
import ForgotPasswword from '@/Modal/ForgotPasswword';
import Otp from '@/Modal/Otp';
import LoginModal from '@/Modal/LoginModal';

export default function NavBar() {
    const active = useModalStore((state) => state.active);
    const setActive = useModalStore((state) => state.setActive);


    return (
        <div className='flex items-center'>
            {/* Desktop */}
            <div className='hidden md:flex w-full gap-8 items-center justify-between px-2 py-2'>
                <div className='flex items-center gap-4'>
                    <Image
                        src='/logo-2.svg'
                        alt='logo'
                        width={100}
                        height={100}
                        className=''
                    />
                    <div className='flex gap-4'>
                        <Link href={"#home"} scroll={false} legacyBehavior>
                            <div 
                            className='cursor-pointer hover:underline' 
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                            }}>Home</div>
                        </Link>
                        <Link href={"#courses"} scroll={false} legacyBehavior className=''>
                            <div 
                                className='cursor-pointer hover:underline' 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Courses
                            </div>
                        </Link>
                    </div>
                </div>
                <Button className='max-w-[100px] shadow-none text-white font-bold rounded-md' onClick={() => setActive('login')}>Login <span><LogIn /></span></Button>
                <div 
                    className={`fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ${active ? '' : 'hidden'}`}
                    onClick={() => setActive(null)}
                >
                    <div 
                        className='p-4 rounded-md shadow-md'
                        onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the parent div
                    >
                        {
                            active === 'login' ? <LoginModal /> : 
                            active === 'signup' ? <SignUpModal /> : 
                            active === 'forgot-pass' ? <ForgotPasswword /> : 
                            active === 'otp' ? <Otp /> : null
                        }
                    </div>
                </div>
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
    );
}
