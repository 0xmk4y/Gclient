"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface Admin {
    firstName: string;
    lastName: string;
    email: string;
}

export default function ProfileSideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }, []);
    

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center text-black'>
            <Button variant={"link"} onClick={toggleSidebar}>
            <Image
                src="/profile-icon.svg"
                alt="Profile"
                width={50}
                height={50}
                className='rounded-full w-10 h-10'
            />
            <p className='text-black'>{user?.user_metadata.firstName + " " + user?.user_metadata.lastName}</p>
            </Button>
            {isOpen && (
            <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
            )}
            <div className={`fixed top-0 right-0 w-72 md:w-[370px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='h-[200px] bg-primary p-0 relative'>
                <X onClick={toggleSidebar} className="absolute top-2 right-2 text-lg text-white"/>
                <Image
                    src="/profile-icon.svg"
                    alt="Profile"
                    width={200}
                    height={200}
                    className='rounded-full absolute -bottom-[70px] left-1/2 transform -translate-x-1/2'
                />
            </div>
            <div className="mt-20 flex flex-col items-center">
                <h2 className="text-xl">{user?.user_metadata.firstName + " " + user?.user_metadata.lastName}</h2>
                <p>{user?.email}</p>
                <div className='px-4 w-full mt-4'>
                    <hr className='border-t border-gray-300 w-full' />
                </div>
                <table className="w-full mt-4 text-sm">
                    <tbody>
                        {/* {Object.entries(info[0]).map(([key, value], index) => (
                            <tr key={index} className="">
                                <td className="min-w-[100px] pl-6">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                                <td className="pr-4">{value}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

