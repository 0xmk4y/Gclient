import React from 'react'
import { Button } from './ui/button'

const Stacks = [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "Django",
    "MongoDB",
    "VueJs",
    "PowerBI",
    "Python",
    "Excel",
    "Tableau",
    "AWS",
    "Azure"
]

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function Stack() {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3'>
        {Stacks.map((stack, index) => (
            <Button 
                key={index} 
                variant={"outline"} 
                className='px-8' 
                style={{ borderColor: getRandomColor() }}
            >
                {stack}
            </Button>
        ))}
    </div>
  )
}
