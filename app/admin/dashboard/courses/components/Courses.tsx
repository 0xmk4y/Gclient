"use client";
import React from "react";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { Course } from "@/types/types";
import { createClient } from "@/app/utils/supabase/client";

export default async function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        console.log("Error fetching courses:", error);
      } else {
        setCourses(data || []);
      }
        };

        fetchCourses();
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          logo={'/engineering.svg'}
          program={course.title}
          price={course.price}
          duration={course.duration}
          instructor={course.instructor}
        />
      ))}
    </div>
  );
}
