import React from "react";
import CourseCard from "./CourseCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getCourses() {
  try {
    return await prisma.course.findMany();
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export default async function Courses() {
  const courses = await getCourses();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          logo={course.title}
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
