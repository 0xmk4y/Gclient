import React from 'react'
import CourseCard from './CourseCard'

async function getcourse() {
    return [
        {
            logo: "/engineering.svg",
            course: "Introduction to Programming",
            price: "99",
            duration: "10 weeks",
            instructor: "John Doe",
            learners: "1500"
        },
        {
            logo: "/engineering.svg",
            course: "Advanced JavaScript",
            price: "199",
            duration: "8 weeks",
            instructor: "Jane Smith",
            learners: "1200"
        },
        {
            logo: "/engineering.svg",
            course: "React for Beginners",
            price: "149",
            duration: "6 weeks",
            instructor: "Emily Johnson",
            learners: "1800"
        },
        {
            logo: "/engineering.svg",
            course: "React for Beginners",
            price: "149",
            duration: "6 weeks",
            instructor: "Emily Johnson",
            learners: "1800"
        },
         {
            logo: "/engineering.svg",
            course: "React for Beginners",
            price: "149",
            duration: "6 weeks",
            instructor: "Emily Johnson",
            learners: "1800"
        }
    ];
}
export default async function Courses() {
    const courses = await getcourse();
    return (
        <div className='flex justify-between flex-wrap flex-col md:flex-row gap-4'>
            {courses.map((course, index) => (
                <CourseCard
                    key={index}
                    logo={course.logo}
                    course={course.course}
                    price={course.price}
                    duration={course.duration}
                    instructor={course.instructor}
                    learners={course.learners}
                />
            ))}
        </div>
    );
}
