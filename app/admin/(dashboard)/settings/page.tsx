import React from "react";
import DashboardNav from "@/components/DashboardNav";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div className="w-full px-4 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <h3 className="font-bold text-xl">Account</h3>
      <form action="" className="mt-10 md:-20">
        <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-3 text-sm">
              <Image
                src={"/profile-icon.svg"}
                alt="Profile image"
                height={100}
                width={100}
                className="w-[100px] md:w-[50px]"
              />
              <p>{"John Doe"}</p>
          </div>
          <input type="file" className=""/>
        </div>

        <h4 className="mb-3 mt-8">Full name</h4>
        <div className="flex flex-col md:flex-row w-full bg-gray-100 py-4 px-2 md:px-8 gap-3">
          <div className="border flex flex-col px-2 py-1 border-b-2 border-b-primary w-full bg-white">
            <label htmlFor="first Name" className="text-sm">First name</label>
            <input type="text" name="first_name" id="" className="border-none bg-transparent focus:outline-none"/>
          </div>
          <div className="border flex flex-col px-2 py-1 border-b-2 border-b-primary w-full bg-white">
            <label htmlFor="first Name" className="text-sm">Last name</label>
            <input type="text" name="last_name" id="" className="border-none bg-transparent focus:outline-none"/>
          </div>
        </div>
      </form>
    </div>
  );
}
