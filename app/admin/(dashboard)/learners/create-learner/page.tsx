import React from "react";
import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import Form from "./components/form";
import { User2, Mail, GraduationCap, MapPin, Phone, UsersRound, ChevronRight } from "lucide-react";

export default function page() {
  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <h3 className="text-gray-400">
        <p>Learners | <span className="font-bold text-[18px] text-black">Create Leaners</span></p>
      </h3>
      <Form />
    </div>
  );
}
