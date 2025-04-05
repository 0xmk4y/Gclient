"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { createClient } from '@/app/utils/supabase/client';
import { useRouter } from 'next/navigation';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  
  export default function NavBar() {
      const router = useRouter()
      interface User {
          firstName: string;
          lastName: string;
        }
        
        const [userData, setUserData] = useState<User | null>(null);
        
    useEffect(() => {
        const checkUser = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();
            setUserData({
                firstName: user?.user_metadata.firstName,
                lastName: user?.user_metadata.lastName
            })
        };
        
        checkUser();
    }, []);
    
    async function logout(){
        const supabase = createClient()
        const { error } = await supabase.auth.signOut()
        router.push('/')
        console.log(error)
    }

    return (
        <div className='flex items-center'>
            <div className='flex w-full gap-8 items-center justify-between mx-3 md:mx-[200px] py-2'>
                <Link href={"/user/dashboard"} className='flex items-center gap-4'>
                    <Image
                        src='/logo-2.svg'
                        alt='logo'
                        width={100}
                        height={100}
                        className=''
                    />
                </Link>
                <div className='flex flex-col md:flex-row items-center text-sm md:gap-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='shadow-none text-white font-bold rounded-full w-10 h-10 flex items-center justify-center'>JD</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-white w-[100px] '>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <button onClick={() => logout()} className='hover:underline text-center flex items-center gap-2'>
                                    <LogOut size={"15px"} />
                                    <p>Logout</p>
                                </button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    {userData && <p>{userData.firstName + " " + userData.lastName}</p>}
                </div>
            </div>
        </div>
    );
}
