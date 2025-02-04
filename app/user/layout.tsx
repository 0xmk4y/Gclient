import Footer from "@/components/Footer"
import Application from "./components/Application"
import NavBar from "./components/NavBar"
import { LayoutDashboard } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {
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
