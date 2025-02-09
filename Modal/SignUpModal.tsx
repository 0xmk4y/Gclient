"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '@/public/google.svg';
import { Mail, Lock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

interface ActiveProps {
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignUpModal({ setActive }: ActiveProps) {
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const response = await signIn('credentials', {
            email: formData.email,
            password: formData.password,
            callbackUrl: '/user/dashboard',
            redirect: true,
        });

        if (response) {
            setError("Signup failed. Try again.");
        }
    };

    return (
        <div className='bg-white text-black border p-4 absolute z-50' style={{ top: '50px', right: '200px', width: '400px' }}>
            <h4 className='font-bold text-center text-[30px]'>Signup</h4>
            <button onClick={() => signIn('google', { callbackUrl: '/user/dashboard' })} className='flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full'>
                <Image src={google} alt='google' height={20} width={20} />
                <p className='text-primary font-bold'>Login using Google</p>
            </button>
            <p className='text-center my-4'>or</p>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                    <Mail size={20} />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email' required />
                </div>
                <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                    <Lock size={20} />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className='focus:outline-none px-2 bg-transparent w-full' placeholder='Password' required />
                </div>
                <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                    <Lock size={20} />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className='focus:outline-none px-2 bg-transparent w-full' placeholder='Confirm password' required />
                </div>
                <Button type="submit" className='font-bold'>
                    <span>Signup</span>
                    <ChevronRight />
                </Button>
                <div className='flex items-center justify-center gap-1'>
                    <p>Already have an account?</p>
                    <Link href="#" className='text-primary' onClick={() => setActive("login")}> Log in</Link>
                </div>
            </form>
        </div>
    );
}
