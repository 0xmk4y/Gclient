"use client";
import React from 'react'
import { User, Mail, ChevronRight, Lock, Phone } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SideBar from '../components/SideBar';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPass: z.string().min(6, { message: 'Confirm password is required' }),
    contact: z.string().min(10, { message: 'Contact number is required' })
}).refine((data) => data.password === data.confirmPass, {
    message: "Passwords do not match",
});

type FormData = z.infer<typeof schema>;


export default function Page() {

   const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })
    const signup: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await fetch('/api/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to sign up');
            }

            router.push('/login'); 
        } catch (err: any) {
            setError("root", { message: err.message || "Error submitting form" });
        }
        console.log(data);
    }

    return (
        <div className='flex'>
            <SideBar />
            <div className='flex flex-col w-full p-3'>
                <div className='flex justify-between md:justify-end md:items-end w-full mb-[50px] space-x-3'>
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
                    <form onSubmit={handleSubmit(signup)} className='text-sm w-full md:max-w-[500px] p-3 bg-white text-gray-400'>
                        <div className='flex flex-col md:flex-row gap-2 mb-4'>
                            <div className=''>
                                <div className='flex flex items-center border dark:border-gray-500 border-b-2 border-b-primary bg-gray-100'>
                                    <User className='mx-1 dark:text-primary' />
                                    <input {...register("firstName")} name='firstName' placeholder='FirstName' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                                </div>
                                {errors.firstName && (
                                    <div className='text-red-500 text-xs mt-1'>{errors.firstName.message}</div>
                                )}
                            </div>

                            <div className=''>
                                <div className='flex flex items-center border dark:border-gray-500 border-b-2 border-b-primary bg-gray-100'>
                                    <User className='mx-1 dark:text-primary' />
                                    <input {...register("lastName")} name='lastName' placeholder='LastName' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                                </div>
                                {errors.lastName && (
                                    <div className='text-red-500 text-xs mt-1'>{errors.lastName.message}</div>
                                )}
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='flex flex items-center border dark:border-gray-500 border-b-2 border-b-primary bg-gray-100'>
                                <Mail className='mx-1 dark:text-primary' />
                                <input {...register("email")} name='email' placeholder='Email' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                            {errors.email && (
                                <div className='text-red-500 text-xs mt-1'>{errors.email?.message}</div>
                            )}
                        </div>

                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className=''>
                                <div className='flex flex items-center border dark:border-gray-500 border-b-2 border-b-primary bg-gray-100'>
                                    <User className='mx-1 dark:text-primary' />
                                    <input {...register("password")} name='password' type='password' placeholder='Password' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                                </div>
                                {errors.password && (
                                    <div className='text-red-500 text-xs mt-1'>{errors.password.message}</div>
                                )}
                            </div>

                            <div className='flex flex-col items-start border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100'>
                                <div className='flex items-center w-full'>
                                    <Lock className='mx-1 dark:text-primary' />
                                    <input {...register("confirmPass")} name='confirmPass' type='password' placeholder='Confirm password' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='flex flex items-center border dark:border-gray-500 border-b-2 border-b-primary bg-gray-100'>
                                <Mail className='mx-1 dark:text-primary' />
                                <input {...register("contact")} name='contact' placeholder='Contact' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                            </div>
                            {errors.contact && (
                                <div className='text-red-500 text-xs mt-1'>{errors.contact?.message}</div>
                            )}
                        </div>

                        {errors.root && (
                            <div className='text-red-500 mb-4 text-center'>
                                <p>{errors.root.message}</p>
                            </div>
                        )}

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
