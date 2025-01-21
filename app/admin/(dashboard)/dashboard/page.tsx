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
      <div className="mb-6">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <p className="text-sm">Welcome back, {"John"}</p>
      </div>
      <div className="bg0 pr-8">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {data.map((item, index) => (
        <CardBox key={index} icon={item.icon} title={item.title} total={item.total} />
          ))}
        </div>
      </div>
    </div>
  );
}
