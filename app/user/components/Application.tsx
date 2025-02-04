import React from 'react'
import Form from './Form'

export default function Application() {
  return (
    <div className='md:mx-[200px] mx-3'>
        <div className='mt-[-40px] md:mt-[-20px] bg-white px-10 py-6 text-[20px]'>
            <div className='flex gap-4'>
                <p className='font-bold'>Application</p>
                <p>Profile</p>
            </div>
            <Form />
        </div>
    </div>
  )
}
