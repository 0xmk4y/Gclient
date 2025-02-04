import React from 'react'
import { Mail, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Otp() {
  return (
    <div className='bg-white text-black border p-4 absolute z-50' style={{ top: '50px', right: '200px', width: '400px' }}>
        <h4 className='font-bold text-center text-[30px]'>OTP Verification</h4>
        <p className='text-center my-4'>Verify your accounts using the six digit </p>
        <form action="" className='flex flex-col gap-4'>
            <div className='border flex items-center px-2 py-2 bg-gray-100'>
                <Mail size={20} />
                <input type="text" name="email" className='focus:outline-none px-2 w-full bg-transparent' placeholder='Email' />
            </div>
            <Button className='font-bold mb-4'>
                <span>Verify</span>
                <ChevronRight />
            </Button>
        </form>
    </div>
  )
}
