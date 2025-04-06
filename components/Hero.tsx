import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row  w-full bg-[#01589A] text-white items-center py-10'>
      <div className='flex flex-col-reverse md:flex-row  w-full bg-[#01589A] text-white items-center justify-between py-10 mx-[100px] xl:mx-[200px]'>
          <div className='max-w-[350px]'>
              <h1 className='text-[30px] leading-8 font-bold mb-4'>Unlock Your Potential with 
              Industry-Leading Courses!</h1>
              <p>"Join thousands of learners gaining real-world skills and advancing their careers. Our expert-led courses are designed to empower you to succeed."</p>
              <div className='w-full flex justify-center md:justify-start mt-4'>
                  {/* <Button variant={"outline"}>Get Started</Button> */}
                  <Link href={'/signup'} className='rounded-sm border px-8 py-2 rounded-md'>Get Started</Link>

              </div>
          </div>
          <Image
              src='/laptop.svg'
              alt='hero'
              width={400}
              height={400}
              className='w-[300px] md:w-[400px] mb-4'
          />
      </div>
    </div>
  )
}
