import React from 'react'

interface CardBoxProps {
    icon: React.ElementType;
    title: string;
    total: string;
}

export default function CardBox({ icon: Icon, title, total }: CardBoxProps) {
    return (
        <div className='bg-gray-100 p-4 min-w-[200px] rounded-md flex-grow'>
            <div className='flex gap-4 mb-4 items-center'>
                <Icon />
                <p className='font-bold'>{title}</p>
            </div>
            <p className='font-bold py-10 bg-white text-center'>${total}</p>
        </div>
    )
}