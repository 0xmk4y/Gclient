"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import google from '@/public/google.svg';
import { User2, Mail, Lock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/Store/ModalStore';

function InputWithIcon({ icon, ...props }: any) {
    return (
        <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-8 bg-gray-100 w-full'>
            <span className='mx-1 dark:text-primary'>{icon}</span>
            <input {...props} className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
        </div>
    );
}

export default function SignUpModal() {
    const setActive = useModalStore((state) => state.setActive);
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: '',
    });

    const [msg, setMsg] = useState('');
    const [pending, setPending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMsg('');
        setPending(true);

        if (formData.password !== formData.confirmPass) {
            setMsg('Passwords do not match');
            setPending(false);
            return;
        }

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                const serverError = result?.errors ?? result?.message ?? 'Signup failed';
                setMsg(typeof serverError === 'string' ? serverError : Object.values(serverError).flat().join(', '));
                return;
            }
            setMsg('Account created successfully');
            router.push('/login');
        } catch (err) {
            console.error(err);
            setMsg('Something went wrong. Please try again.');
        } finally {function InputWithIcon({ icon, error, ...props }: any) {
            return (
                <div className='w-full'>
                    <div className='flex items-center border dark:border-gray-500 border-b-2 border-b-primary mb-2 bg-gray-100 w-full'>
                        <span className='mx-1 dark:text-primary'>{icon}</span>
                        <input {...props} className='p-2 w-full focus:ring-0 outline-none bg-transparent text-black' />
                    </div>
                    {error && <p className='text-xs text-red-500 mb-4'>{error}</p>}
                </div>
            );
        }
        
            setPending(false);
        }
    };

    return (
        <div className="bg-white text-black border p-4 absolute z-50" style={{ top: '50px', right: '200px', width: '400px' }}>
            <h4 className="font-bold text-center text-[30px]">Signup</h4>
            <button
                onClick={() => signIn('google', { callbackUrl: '/user/dashboard' })}
                className="flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full"
            >
                <Image src={google} alt="google" height={20} width={20} />
                <p className="text-primary font-bold">Login using Google</p>
            </button>
            <p className="text-center my-4">or</p>

            {msg && <p className="text-red-500 text-center">{msg}</p>}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <InputWithIcon
                        icon={<User2 size={20} />}
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}

                    />
                    <InputWithIcon
                        icon={<User2 size={20} />}
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}

                    />
                </div>
                <InputWithIcon
                    icon={<Mail size={20} />}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <InputWithIcon
                    icon={<Lock size={20} />}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <InputWithIcon
                    icon={<Lock size={20} />}
                    type="password"
                    name="confirmPass"
                    placeholder="Confirm password"
                    value={formData.confirmPass}
                    onChange={handleChange}
                />
                <Button type="submit" className="font-bold" disabled={pending}>
                    {pending ? 'Signing up...' : 'Sign up'}
                    <ChevronRight />
                </Button>
                <div className="flex items-center justify-center gap-1">
                    <p>Already have an account?</p>
                    <Link href="#" className="text-primary" onClick={() => setActive('login')}>
                        Log in
                    </Link>
                </div>
            </form>
        </div>
    );
}
