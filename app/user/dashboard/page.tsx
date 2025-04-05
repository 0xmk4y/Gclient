"use client"
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import Profile from "../components/Profile";
import Enrolled from "../components/Enrolled";

export default function page() {
  return (
    <div>
      <div className="md:mx-[200px] mx-3">
        <div className="mt-[-40px] md:mt-[-20px] bg-white py-6 text-[20px]">
          <div className="flex gap-4 px-10">
            <p className="font-bold">Application</p>
            <p>Profile</p>
          </div>
          <Profile />
          <Enrolled />
          <div className="flex flex-col-reverse md:flex-row gap-4">
              <Link href={""} className="flex items-center text-sm px-8 py-2 font-bold bg-gray-100 text-gray-600 hover:bg-gray-300 shadow-none justify-center" >
                  <p className="">Home</p>
                  <ChevronRight size={20}/>
              </Link>
              <Link href={"/user/application"} className="flex bg-[#01589A] text-sm text-white items-center justify-center font-bold px-4 py-2">
                <p className="">Start new application</p>
                <ChevronRight size={20} />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
