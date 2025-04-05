"use client"
import React from 'react'
import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { User } from '@supabase/supabase-js';

export default function Profile() {
    const [user, setUser] = React.useState<User>();
    useEffect(() => {
          const checkUser = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();
            
            if (user) {
                setUser(user);
            } 
                };
          checkUser();
        }, []);
  return (
    <div className='flex flex-col md:flex-row gap-8 md:items-center text-[16px] p-4 my-6'>
        <Image 
            src={'./profile-icon.svg'}
            alt=''
            height={100}
            width={100}
            className='w-[50px] h-[50px] rounded-full bg-primary'
        />
        <div>
            <p>{user?.user_metadata.firstName + " " + user?.user_metadata.lastName}</p>
            <p>{user?.user_metadata.email}</p>
        </div>

        <div>
            <p>Location</p>
            <p>Kumasi</p>
        </div>

        <div>
            <p>Phone</p>
            <p>0508872797</p>
        </div>
    </div>
  )
}
