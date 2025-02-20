import React from "react";
import DashboardNav from "@/components/DashboardNav";

export default function page() {
  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <h3 className="text-gray-400">
        <p>Courses | <span className="font-bold text-[18px] text-black">Create Course</span></p>
      </h3>
    </div>
  );
}
