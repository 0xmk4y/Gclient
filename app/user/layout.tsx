"use client"
import Footer from "@/components/Footer"
import Application from "./components/Application"
import NavBar from "./components/NavBar"
import { LayoutDashboard } from "lucide-react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/app/utils/supabase/client"

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
  
    useEffect(() => {
      const checkUser = async () => {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push("/");
        } else {
          localStorage.setItem("user", JSON.stringify(user));
        }
            };
      checkUser();
    }, [router]);
  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
            <NavBar />
            <div className="bg-[#01589A] text-white h-[100px] md:h-[200px]">
              <div className="flex items-center gap-4 md:mx-[200px] mx-3 pt-6">
                <LayoutDashboard />
                <h2 className="font-bold text-[20px] md:text-[30px]">Dashboard</h2>
              </div>
            </div>
            {children}
        </div>
        <Footer />
    </div>
  )
}
