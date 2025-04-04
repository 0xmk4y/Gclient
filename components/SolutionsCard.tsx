import React from 'react'
import Image from 'next/image'

interface SolutionsCardProp{
    icon: string
    color: string
    alt: string
    title: string
    description: string
    price: string
}

export default function SolutionsCard({ icon, color,  alt, title, description, price }: SolutionsCardProp) {
  return (
    <div className='flex flex-col gap-4 border p-4 rounded-md shadow-lg w-full'>
        <Image
            src={icon}
            alt={alt}
            width={70}
            height={70}
            className={`p-2 border bg-[${color}] rounded-md`}
        />
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className=''>{description}</p>
        <div className='flex items-center gap-2'>
            <p>Price: </p>
            <p className='font-bold'>$ {price}</p>
        </div>
    </div>
  )
}
