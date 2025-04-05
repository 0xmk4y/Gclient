"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@/app/utils/supabase/client';
import NotEnrolled from './NotEnrolled';

export default function Enrolled() {
    const [enrolled, setEnrolled] = useState<any[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEnrolledCourses = async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from("learners").select("*");

            if (error) {
                console.error("Error fetching courses:", error);
            }

            setEnrolled(data);
            setLoading(false);
        };

        fetchEnrolledCourses();
    }, []);

    return (
        <div className='text-[16px] p-4 my-6 flex flex-col gap-4'>
            {loading ? (
                <p>Loading enrolled courses...</p>
            ) : enrolled && enrolled.length > 0 ? (
                enrolled.map((learner: any, index: number) => (
                    <div key={index} className='flex gap-8 items-center border py-4 px-1 rounded-md overflow-x-auto'>
                        <div className='border-r-2 px-4 w-full min-w-[200px]'>
                            <p className='text-zinc-400'>Program</p>
                            <p>{learner.program}</p>
                        </div>

                        <div className='border-r-2 px-4 w-full min-w-[200px]'>
                            <p className='text-zinc-400'>Date started</p>
                            <p>{new Date(learner.createdat).toDateString()}</p>
                        </div>

                        <div className='px-4 w-full min-w-[200px]'>
                            <p className='text-zinc-400'>Location</p>
                            <p>{learner.location}</p>
                        </div>
                    </div>
                ))
            ) : (
                <NotEnrolled />
            )}
        </div>
    );
}
