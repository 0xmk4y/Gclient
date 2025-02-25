"use client";
import React from "react";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Course } from "@/types/types";

export default async function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('/api/courses');
        setCourses(await res.json());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourses();
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          logo={'/engineering.svg'}
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
