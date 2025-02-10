"use client";
import React from 'react'
import { User, Mail, ChevronRight, Lock, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPass: formData.get('confirmPass'),
            contact: formData.get('contact'),
        };

        const response = await fetch('/api/admin/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            // Handle successful registration
            console.log('Registration successful');
        } else {
            // Handle registration error
            console.error('Registration failed');
        }
    };

    return (
        <div className='flex'>
            <div className='bg-primary h-screen hidden md:block'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptates.</p>
            </div>

            <div className='flex flex-col w-full p-3'>
                <div className='flex justify-between md:justify-end md:items-end w-full mb-[50px] space-x-3'>
                    <Link href={"/"} className='underline hidden md:block'>Need to create an account ?</Link>
                    <Image 
                        src={'/logo.svg'}
                        alt='logo'
                        height={100}
                        width={100}
                    />
                    <Link href={"/admin/login"} className='text-primary md:text-white bg-white md:bg-primary px-4 py-2 font-bold'>Log in<ChevronRight className='inline mb-1' size={16} /></Link>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <h3 className='font-bold text-white md:text-black text-[27px] mb-14 w-full text-center p-2'>Register to get started</h3>
                    <form action="" onSubmit={handleSubmit} className='text-sm w-full md:max-w-[500px] p-3 bg-white text-gray-400'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                                <User className='mx-1 dark:text-primary' />
                                <input type="text" name='firstName' placeholder='FirstName' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                            <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                                <User className='mx-1 dark:text-primary' />
                                <input type="text" name='lastName' placeholder='LastName' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                        </div>
                        <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                            <Mail className='mx-1 dark:text-primary' />
                            <input type="text" name='email' placeholder='Email' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                                <Lock className='mx-1 dark:text-primary' />
                                <input type="password" name='password' placeholder='Password' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                            <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                                <Lock className='mx-1 dark:text-primary' />
                                <input type="password" name='confirmPass' placeholder='Confirm password' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                        </div>
                        <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                            <Phone className='mx-1 dark:text-primary' />
                            <input type="text" name='contact' placeholder='Contact' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                        </div>

                        <div className='w-full'>
                            <Button type='submit' className='bg-primary text-white py-2 px-4 mt-4 w-full'>
                                Create account
                                <ChevronRight className='inline ml-2' size={16} />
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='text-center mt-6 text-sm'>
                    <p>By confirming your email, you agree to our Terms of Service</p>
                    <p>and that you have read and understood our Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}
