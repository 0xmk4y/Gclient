"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';

export default function HomeSideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const info = [
        {
            name: "John Doe",
            email: "email@example.com",
            program: "Computer Science",
            gender: "Male",
            contact: "08012345678",
            location: "Lagos, Nigeria",
            paid: "N/A",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum aliquam. Nullam nec nunc nec liber"
        }
    ]

    return (
        <div className='flex items-center text-black'>
            <Button variant={"link"} onClick={toggleSidebar}>
                <Menu />
            </Button>
            {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
            )}
            <div className={`fixed top-0 right-0 w-72 md:w-[370px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='h-10 p-0 relative'>
                <X onClick={toggleSidebar} className="absolute top-2 right-2 text-lg text-gray-600"/>
            </div>
            <div className='flex flex-col px-4 gap-4'>
                <Link href="#home">Home</Link>
                <Link href="#courses">Courses</Link>
                <Link href={'/login'} className='max-w-[100px] text-center py-1 border-2 border-primary text-primary font-bold mt-4 hover:bg-primary hover:text-white'>Login</Link>
            </div>
            
            </div>
        </div>
    );
};

