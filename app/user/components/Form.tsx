"use client"
import { User, Lock, Mail, MapPin, GraduationCap, UsersRound, Phone, BadgeCent, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { createClient } from '@/app/utils/supabase/client'
import { Course } from '@/types/types'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const schema = z.object({
    firstname: z.string().min(1, "First name is required"),
    user_id: z.string(),
    lastname: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    location: z.string().min(1, "Location is required"),
    program: z.string().min(1, "Please select a program"),
    gender: z.string().min(1, "Please select a gender"),
    disabled: z.string().min(1, "Please select an option"),
    phone: z.string().regex(/^\d+$/, "Phone number must contain only digits").min(10, "Phone number must be at least 10 digits"),
    amount: z.string().regex(/^\d+$/, "Amount must be a valid number"),
    description: z.string().min(1, "Description is required"),
})

type FormData = z.infer<typeof schema>;

export default function Form() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [user_id, setUser_id] = useState<string>('')
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const newLearner: SubmitHandler<FormData> = async (data) => {
        try {
            const response = await fetch('/api/learners/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to Register');
            }

            router.push('/user/dashboard');
        } catch (err: any) {
            setError("root", { message: err.message || "Error submitting form" });
        }
        console.log(data);
    }

    useEffect(() => {
        const fetchCourses = async () => {
            const supabase = createClient();
            const { data, error } = await supabase.from('courses').select('*');
            const { data: { user } } = await supabase.auth.getUser();
            if (user){
                console.log(user)
                setUser_id(user.id as string)
                setValue("user_id", user.id);
            }
            if (error) {
                console.log("Error fetching courses:", error);
            } else {
                console.log(data)
                setCourses(data || []);
            }
        };

        fetchCourses();
    }, [])

    return (
        <div className='md:mx-[70px] mt-10 flex justify-center items-center'>
            <form onSubmit={handleSubmit(newLearner)}
                className='text-gray-600 text-[16px]'
            >
                <h3 className='font-bold text-[20px] md:text-[30px] text-black mb-4'>Start new application</h3>
                {/*  */}
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                    <div className='w-full'>
                        <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                            <User size={20} />
                            <input
                                type="text"
                                {...register('firstname')}
                                className='border-none bg-transparent focus:outline-none px-2'
                                placeholder='First name'
                            />
                        </div>
                        {errors.firstname && <div className="text-red-500 text-sm px-1">{errors.firstname.message}</div>}
                    </div>
                    <div className='w-full'>
                        <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                            <Lock size={20} />
                            <input
                                type="text"
                                {...register('lastname')}
                                className='border-none bg-transparent focus:outline-none px-2'
                                placeholder='Last name'
                            />
                        </div>
                        {errors.lastname && <div className="text-red-500 text-sm px-1">{errors.lastname.message}</div>}
                    </div>
                </div>

                {/*  */}
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                    <div className='w-full'>
                        <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                            <Mail size={20} />
                            <input
                                type="text"
                                {...register('email')}
                                className='border-none bg-transparent focus:outline-none px-2'
                                placeholder='Email'
                            />
                        </div>
                        {errors.email && <div className="text-red-500 text-sm px-1">{errors.email.message}</div>}
                    </div>
                    <div className='w-full'>
                        <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                            <MapPin size={20} />
                            <input
                                type="text"
                                {...register('location')}
                                className='border-none bg-transparent focus:outline-none px-2'
                                placeholder='Location'
                            />
                        </div>
                        {errors.location && <div className="text-red-500 text-sm px-1">{errors.location.message}</div>}
                    </div>
                </div>

                {/*  */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full">
                    <div className='w-full'>
                        <div className="flex items-center border w-full bg-gray-100 rounded-md px-2 ">
                            <GraduationCap size={20} />
                            <select
                                {...register('program')}
                                className="bg-transparent border-none focus:outline-none p-2 w-full"
                            >
                                <option value="" disabled selected>Program</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.title}>
                                        {course.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {errors.program && <div className="text-red-500 text-sm px-1">{errors.program.message}</div>}
                    </div>
                    <div className='w-full'>
                        <div className="flex items-center border w-full bg-gray-100 rounded-md px-2">
                            <GraduationCap size={20} />
                            <select
                                {...register('gender')}
                                className="bg-transparent border-none focus:outline-none p-2 w-full"
                            >
                                <option value="" disabled selected>Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        {errors.gender && <div className="text-red-500 text-sm px-1">{errors.gender.message}</div>}
                    </div>
                </div>

                {/*  */}
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-10 mb-3 md:mb-6 w-full'>
                    <div className='w-full'>
                        <div className="flex items-center border w-full bg-gray-100 rounded-md px-2">
                            <UsersRound size={20} />
                            <select
                                {...register('disabled')}
                                className="bg-transparent border-none focus:outline-none p-2 w-full"
                            >
                                <option value="" disabled selected>Disabled</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        {errors.disabled && <div className="text-red-500 text-sm px-1">{errors.disabled.message}</div>}
                    </div>
                    <div className='w-full'>
                        <div className='flex border items-center px-2 py-1 rounded-md bg-gray-100 w-full'>
                            <Phone size={20} />
                            <input
                                type="text"
                                {...register('phone')}
                                className='border-none bg-transparent focus:outline-none px-2'
                                placeholder='Phone'
                            />
                        </div>
                        {errors.phone && <div className="text-red-500 text-sm px-1">{errors.phone.message}</div>}
                    </div>
                </div>

                {/*  */}
                <div className="flex items-center border w-full bg-gray-100 px-2 py-1 rounded-md mb-3 md:mb-6 ">
                    <BadgeCent size={20} />
                    <input
                        type="text"
                        {...register('amount')}
                        className="border-none bg-transparent focus:outline-none px-2 w-full"
                        placeholder="Amount"
                    />
                </div>
                {errors.amount && <div className="text-red-500 text-sm px-1">{errors.amount.message}</div>}

                {/*  */}
                <div>
                    <div className="flex items-center border w-full bg-gray-100 px-2 py-1 rounded-md">
                        <textarea
                            cols={5}
                            rows={5}
                            {...register('description')}
                            className="bg-transparent border-none focus:outline-none p-2 w-full"
                            placeholder="Description"
                        ></textarea>
                    </div>
                    {errors.description && <div className="text-red-500 text-sm px-1">{errors.description.message}</div>}
                </div>
                <input {...register("user_id")} className='hidden' type="text" name="user_id" id="" defaultValue={user_id} value={user_id} />

                {/* Submit button */}
                <div className='flex gap-4 my-10'>
                    <Link href={"/user/dashboard"} className="flex items-center gap-2 text-sm px-8 py-2 font-bold bg-gray-100 text-gray-600 hover:bg-gray-300 shadow-none" >
                        <ChevronLeft size={20} />
                        <p>Back</p>
                    </Link>
                    <Button type="submit" className='px-8 py-1 shadow-none font-bold'>
                        <p>Register</p>
                        <ChevronRight size={20} />
                    </Button>
                </div>
            </form>
        </div>
    )
}
