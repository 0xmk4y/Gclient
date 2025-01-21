import DashboardNav from "@/components/DashboardNav";
import ProfileSideBar from "@/components/ProfileSideBar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";

export default function Page() {
  return (
    <div className="flex justify-end w-full p-3">
      <DashboardNav />
    </div>
  );
}
