"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '@/public/google.svg';
import { Mail, Lock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActiveProps {
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export default function SignUpModal({ setActive }: ActiveProps) {
    return (
        <div className='bg-white text-black border p-4 absolute z-50' style={{ top: '50px', right: '200px', width: '400px' }}>
            {/* Sign Up Modal */}
                <div>
                    <h4 className='font-bold text-center text-[30px]'>Signup</h4>
                    <Link href={"#"} className='flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full'>
                        <Image src={google} alt='google' height={20} width={20} />
                        <p className='text-primary font-bold'>Login using Google</p>
                    </Link>
                    <p className='text-center my-4'>or</p>
                    <form action="/api/signup" className='flex flex-col gap-4'>
                        <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                            <Mail size={20} />
                            <input type="text" name="email" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email' />
                        </div>
                        <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                            <Lock size={20} />
                            <input type="password" name="password" className='focus:outline-none px-2 bg-transparent w-full' placeholder='Password' />
                        </div>
                        <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                            <Lock size={20} />
                            <input type="password" name="confirmPassword" className='focus:outline-none px-2 bg-transparent w-full' placeholder='Confirm password' />
                        </div>
                        <Button className='font-bold'>
                            <span>Signup</span>
                            <ChevronRight />
                        </Button>
                        <div className='flex items-center justify-center gap-1'>
                            <p>Already have an account ? </p>
                            <Link href={""} className='text-primary' onClick={() => setActive("login")}> log in</Link>
                        </div>
                    </form>
                </div>
        </div>
    );
}
