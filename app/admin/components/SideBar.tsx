import React from "react";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="bg-[#01589A] h-screen hidden md:flex text-white md:w-[500px] flex-col justify-between">
      <div>
        <Image
          src={"/logo.svg"}
          alt="logo"
          height={200}
          width={200}
          className="h-[40px] mt-10 mb-6"
        />
        <p className="font-bold text-[20px] max-w-[230px] mx-6">
          Create Your Account to Manage and Access the Dashboard Effortlessly.
        </p>
      </div>
      <Image
        src={"/wave.svg"}
        alt="wave"
        height={500}
        width={500}
        className="relative top-[40px]"
      />
      <Image
        src={"/person.svg"}
        alt="person"
        height={500}
        width={500}
        className=""
      />
    </div>
  );
}
