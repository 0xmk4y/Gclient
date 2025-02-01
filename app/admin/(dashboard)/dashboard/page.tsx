import CardBox from "@/components/CardBox";
import DashboardNav from "@/components/DashboardNav";
import ProfileSideBar from "@/components/ProfileSideBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";
import { Banknote, Clock, Scroll, UsersRound } from 'lucide-react'

const data = [
  {
    icon: Banknote,
    title: "Collected",
    total: "2000"
  },
  {
    icon: Clock,
    title: "Pending",
    total: "20000"
  },
  {
    icon: Scroll,
    title: "Total invoices",
    total: "35"
  },
  {
    icon: UsersRound,
    title: "Total leaners",
    total: "49"
  },
]
export default function Page() {
  return (
    <div className="w-full">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="mb-6 px-4 md:px-8">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p className="text-sm">Welcome back, {"John"}</p>
      </div>
      <div className="px-4 md:px-8">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {data.map((item, index) => (
        <CardBox key={index} icon={item.icon} title={item.title} total={item.total} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between w-full px-4 md:px-8 mb-12">
        {/* Revenues */}
        <div className="w-full md:w-1/2 p-2">
          <h2 className="font-bold text-xl mb-4">Recent Revenues</h2>
          <div className="h-[350px] border">

          </div>
        </div>
        {/* Invoices */}
        <div className="w-full md:w-1/2 p-2">
          <h2 className="font-bold text-xl mb-4">Latest Invoices</h2>
          <div className="h-[350px] border">

          </div>
        </div>
      </div>
    </div>
  );
}
