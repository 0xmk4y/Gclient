import React from 'react'
import Image from 'next/image'

export default function NotEnrolled() {
    return (
        <div className='w-full flex flex-col items-center gap-4 justify-center'>
            <Image
                src={'/no-courses.svg'}
                alt=''
                height={200}
                width={200}
                className='w-[200px]'
            />
            <div className='font-semibold'>
                <p>!!! OOPs no application</p>
            </div>
        </div>
    )
}
