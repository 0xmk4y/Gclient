"use client";
import { usePathname } from 'next/navigation';
import { Calendar, Scroll, GraduationCap,  Home, Flag, UsersRound } from "lucide-react";
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Invoices",
    url: "/admin/invoices",
    icon: Scroll,
  },
  {
    title: "Learners",
    url: "/admin/learners",
    icon: UsersRound,
  },
  {
    title: "Courses",
    url: "/admin/courses",
    icon: GraduationCap,
  },
  {
    title: "Report",
    url: "/admin/report",
    icon: Flag,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent className="bg-primary text-white flex flex-col justify-between h-full">
        <SidebarGroup>
          <SidebarGroupLabel className="flex w-full justify-center bg-white h-[80px]">
            <Image src={"/logo-2.svg"} alt="logo" height={100} width={100} />
          </SidebarGroupLabel>
          <SidebarGroupContent className="">
            <SidebarMenu className="mt-8">
              <div>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="mb-6">
                  <SidebarMenuButton asChild className='hover:bg-gray-50 hover:text-black rounded-md'>
                    <Link
                    href={item.url}
                    className={`text-xl ${pathname === item.url ? 'bg-white text-black ' : ''}`}
                    >
                    <item.icon />
                    <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-auto mb-6">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="text-xl">
                  <Calendar />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#" className="text-xl">
                  <Calendar />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
