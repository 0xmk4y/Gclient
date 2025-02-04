import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import google from '@/public/google.svg'
import { useState } from 'react'


import { Mail, Lock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LoginModal() {
    const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false);
    const [forgot, setForgot] = useState(false);
    const [otp, setOtp] = useState(false);

  return (
    <div className='bg-white text-black border p-4 absolute z-50 ' style={{ top: '50px', right: '200px', width: '400px' }}>
        
        {/* Login Modal */}
        
        {
            login && 
            <div>
                <h4 className='font-bold text-center text-[30px]'>Login</h4>
                <Link href={"#"} className='flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full'>
                    <Image
                        src={google}
                        alt='google'
                        height={20}
                        width={20}
                    />
                    <p className='text-primary font-bold'>Login using Google</p>
                </Link>
                <p className='text-center my-4'>or</p>
                <form action="" className='flex flex-col gap-4'>
                    <div className='border flex items-center px-2 py-2'>
                        <Mail size={20} />
                        <input type="text" name="email" id="" className='focus:outline-none px-2 w-full' placeholder='Email'/>
                    </div>
                    <div className='border flex items-center px-2 py-2'>
                        <Lock size={20}/>
                        <input type="password" name="password" id="" className='focus:outline-none px-2 w-full'placeholder='Password'/>
                    </div>
                    <Link href={""} className='text-primary text-sm' onClick={() => { setLogin(false); setForgot(true); setOtp(false); setSignup(false); }}>Forgot password?</Link>
                    <Button className='font-bold'>
                        <span>Login</span>
                        <ChevronRight />
                    </Button>
                    <div className='flex items-center justify-center gap-1'>
                        <p>Need to create an account? </p>
                        <Link href={""} className='text-primary' onClick={() => { setLogin(false); setForgot(false); setOtp(false); setSignup(true); }}> signup</Link>
                    </div>
                </form>
            </div>
        }

        {/* Sign Up Modal */}

        {
            signup && 
            <div>
                <h4 className='font-bold text-center text-[30px]'>Signup</h4>
                <Link href={"#"} className='flex justify-center mt-4 border border-primary px-8 py-2 text-sm gap-2 w-full'>
                    <Image
                        src={google}
                        alt='google'
                        height={20}
                        width={20}
                    />
                    <p className='text-primary font-bold'>Login using Google</p>
                </Link>
                <p className='text-center my-4'>or</p>
                <form action="" className='flex flex-col gap-4'>
                    <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                        <Mail size={20} />
                        <input type="text" name="email" id="" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email'/>
                    </div>
                    <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                        <Lock size={20}/>
                        <input type="password" name="password" id="" className='focus:outline-none px-2 bg-transparent w-full'placeholder='Password'/>
                    </div>
                    <div className='border flex items-center px-2 py-2 bg-gray-100 rounded-md'>
                        <Lock size={20}/>
                        <input type="password" name="password" id="" className='focus:outline-none px-2 bg-transparent w-full'placeholder='Confirm password'/>
                    </div>
                    <Link href={""} className='text-primary text-sm' onClick={() => { setLogin(false); setForgot(true); setOtp(false); setSignup(false); }}>Forgot password?</Link>
                    <Button className='font-bold'>
                        <span>Login</span>
                        <ChevronRight />
                    </Button>
                    <div className='flex items-center justify-center gap-1'>
                        <p>Already have an account ? </p>
                        <Link href={""} className='text-primary' onClick={() => { setLogin(true); setForgot(false); setOtp(false); setSignup(false); }}> log in</Link>
                    </div>
                </form>
            </div>
        }

        {/* Forgot Password */}

        {
            forgot && 
            <div>
                <h4 className='font-bold text-center text-[30px]'>Forogt password</h4>
                <p className='text-center my-4'>Enter your email address to reset your password</p>
                <form action="" className='flex flex-col gap-4'>
                    <div className='border flex items-center px-2 py-2 bg-gray-100'>
                        <Mail size={20} />
                        <input type="text" name="email" id="" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email'/>
                    </div>
                    <Button className='font-bold mb-4'>
                        <span>Reset password</span>
                        <ChevronRight />
                    </Button>
                </form>
            </div>
        }

        {/* OTP */}
        {
            otp && 
            <div>
                <h4 className='font-bold text-center text-[30px]'>OTP Verification</h4>
                <p className='text-center my-4'>Verify your accounts using the six digit </p>
                <form action="" className='flex flex-col gap-4'>
                    <div className='border flex items-center px-2 py-2 bg-gray-100'>
                        <Mail size={20} />
                        <input type="text" name="email" id="" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email'/>
                    </div>
                    <Button className='font-bold mb-4'>
                        <span>Reset password</span>
                        <ChevronRight />
                    </Button>
                </form>
            </div>
        }

    </div>
  )
}
