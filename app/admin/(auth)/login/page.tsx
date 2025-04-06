"use client"
import React from 'react'
import { Mail, LockKeyhole, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import SideBar from '../../components/SideBar';

const schema = z.object({
    email: z.string().email(),
    password: z.string()
})

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
    });

    const login: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await fetch('/api/admin/login', {
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
            const responseData = await response.json();
            router.push('/admin/dashboard/view');
        } catch (err: any) {
            setError("root", { message: err.message || "Error submitting form" });
        }
    }

    return (
        <div className='flex bg-primary md:bg-white h-screen text-white'>
            <SideBar />
            <div className='flex flex-col w-full p-3'>
                <div className='flex justify-between md:justify-end md:items-end w-full mb-[50px] space-x-3'>
                    <Link href={"/"} className='underline hidden md:block'>Need to create an account?</Link>
                    <Image
                        src={'/logo.svg'}
                        alt='Company Logo'
                        height={100}
                        width={100}
                    />
                    <Link href={"/admin/register"} className='text-primary md:text-white bg-white md:bg-primary px-4 py-2 font-bold hover:bg-gray-200 md:hover:bg-primary/80 rounded-md'>Sign up</Link>
                </div>
                <div className='flex flex-col justify-center items-center w-full'>
                    <Image
                        src={'/gclient.svg'}
                        alt='Company Logo'
                        height={200}
                        width={200}
                        className='mb-8 hidden md:block'
                    />
                    <h3 className='font-bold text-white md:text-black text-[27px] mb-8 w-full text-center p-2'>Login into your account</h3>
                    <form onSubmit={handleSubmit(login)} className='text-sm w-full md:max-w-[400px] p-3 bg-white text-gray-400 py-8 rounded-md'>
                        <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-2 bg-gray-100'>
                            <Mail className='mx-1 dark:text-primary' />
                            <input {...register("email")} type="email" name='email' placeholder='Email' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                        </div>
                        {errors.email && <div className="text-red-500 text-sm mb-2">{errors.email.message}</div>}
                        <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-2 bg-gray-100'>
                            <LockKeyhole className='mx-1 dark:text-primary' />
                            <input {...register("password")} type="password" name='password' placeholder='Password' className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                        </div>
                        {errors.password && <div className="text-red-500 text-sm mb-2">{errors.password.message}</div>}
                        {errors.root && <div className="text-red-500 text-sm mb-4">{errors.root.message}</div>}
                        <Link href={"/admin/reset-password-email"} className='text-primary'>Forgot Password</Link>
                        <div className='w-full mt-4'>
                            <Button type="submit" className='bg-primary text-white py-2 px-4 mt-4 w-full'>
                                {isSubmitting ? 'Loading..' : 'Login'}
                                <ChevronRight className='inline ml-2' size={16} />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
