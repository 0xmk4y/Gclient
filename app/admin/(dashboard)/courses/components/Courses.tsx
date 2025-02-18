import React from 'react'
import CourseCard from './CourseCard'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getcourse() {
    try{
        const learners = await prisma.course.findMany({});
        console.log(learners);
        return learners;
      } catch (error) {
        console.error("Error fetching learners:", error);
        return [];
      }
}
export default async function Courses() {
    const courses = await getcourse();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {courses.map((course, index) => (
                <CourseCard
                    key={index}
                    logo={course.logo}
                    program={course.title}
                    price={course.price}
                    duration={course.duration}
                    instructor={course.instructor}
                    learners={course.learners}
                />
            ))}
        </div>
    );
}
