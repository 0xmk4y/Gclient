"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Lock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import google from '@/public/google.svg'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useModalStore } from '@/Store/ModalStore';


export default function LoginModal() {
    const setActive = useModalStore((state) => state.setActive);


  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false)  

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.message || 'Login failed');
      }

      console.log('Login successful');

      const user = res.user;
      localStorage.setItem('user', JSON.stringify(user));

      router.push('/user/dashboard');
    } catch (error: any) {
      console.error('An error occurred:', error);
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className='bg-white text-black border p-4 absolute z-50' style={{ top: '50px', right: '200px', width: '400px' }}>
    <h4 className='font-bold text-center text-[30px]'>Login</h4>
    <button
      onClick={() => signIn('github', { callbackUrl: '/user/dashboard' })}
      className='flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full'
    >
      <Image src={google} alt='google' height={20} width={20} />
      <p className='text-primary font-bold'>Login using Google</p>
    </button>
    <p className='text-center my-4'>or</p>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <div className='border flex items-center px-2 py-2'>
        <Mail size={20} />
        <input type="email" name="email" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email' required />
      </div>
      <div className='border flex items-center px-2 py-2'>
        <Lock size={20} />
        <input type="password" name="password" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Password' required />
      </div>
      <Link href="#" className='text-primary text-sm' onClick={() => setActive("forgot-pass")}>Forgot password?</Link>
      {
        error && <p className='text-red-500 text-sm text-center'>{error}</p>
      }
      <Button type="submit" className='font-bold'>
        <span>{ isLoading ? 'Loading..' : 'Login'}</span>
        <ChevronRight />
      </Button>
      <div className='flex items-center justify-center gap-1'>
        <p>Need to create an account?</p>
        <Link href="#" className='text-primary' onClick={() => setActive("signup")}>Signup</Link>
      </div>
    </form>
  </div>
  )
}
