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
      <form action="" className="my-10 md:-20">
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

        {/* first row */}
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

        {/* Second row */}
        <h4 className="mt-8">Email</h4>
        <p className="mb-3">Manage account email address</p>
        <div className="flex flex-col md:flex-row w-full bg-gray-100 py-4 px-2 md:px-8 gap-3">
          <div className="border flex flex-col px-2 py-1 border-b-2 border-b-primary w-full bg-white">
            <label htmlFor="email" className="text-sm">Email</label>
            <input type="email" name="email" id="" className="border-none bg-transparent focus:outline-none"/>
          </div>
        </div>

      {/* Third row */}

      <h4 className="mt-8">Password</h4>
      <p className="mb-3">Modify your current password</p>
        <div className="flex flex-col md:flex-row w-full bg-gray-100 py-4 px-2 md:px-8 gap-3">
          <div className="border flex flex-col px-2 py-1 border-b-2 border-b-primary w-full bg-white">
            <label htmlFor="first Name" className="text-sm">Current Password</label>
            <input type="password" name="old-password" id="" className="border-none bg-transparent focus:outline-none"/>
          </div>
          <div className="border flex flex-col px-2 py-1 border-b-2 border-b-primary w-full bg-white">
            <label htmlFor="first Name" className="text-sm">New password</label>
            <input type="password" name="new-password" id="" className="border-none bg-transparent focus:outline-none"/>
          </div>
      </div>

      <div className="mt-8 flex gap-4 items-center">
        <Button className="w-[120px]" variant={"outline"}>Logout</Button>
        <Button className="w-[120px]">Update</Button>
      </div>

      </form>
    </div>
  );
}