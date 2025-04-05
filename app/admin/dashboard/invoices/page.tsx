import React from "react"
import SearchBar from "@/components/SearchBar"
import DashboardNav from "@/components/DashboardNav"
import Table from "./components/Table"
import Link from "next/link"


export default async function page() {

  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="container mx-auto w-full">
        <h3 className="font-bold mb-8">Invoices</h3>
        <div className="flex gap-8 mb-8">
          <SearchBar placeholder="Search Invoice" />
            <Link href="/admin/dashboard/invoices/create-invoice" className="w-[200px] text-center py-2 text-white font-bold bg-primary">Create invoice</Link>
        </div>
        <Table />
      </div>
    </div>
    
  )
}
