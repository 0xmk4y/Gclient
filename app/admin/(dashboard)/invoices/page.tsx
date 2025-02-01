import SearchBar from "@/components/SearchBar"
import { Invoices, columns } from "./columns"
import { DataTable } from "./data-table"
import DashboardNav from "@/components/DashboardNav"
import { Button } from "@/components/ui/button"
import Table from "./components/Table"


async function getData(): Promise<Invoices[]> {
  // Fetch data from your API here.
  return [
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Paid",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
     {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
     {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
    {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
     {
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "Pending",
    },
  ]
}

export default async function page() {
  const data = await getData()

  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="container mx-auto py-10 w-full">
        <div className="flex gap-8">
          <SearchBar placeholder="Search Invoice" />
            <Button className="h-10 w-[200px] text-white font-bold">
              <a href="/admin/invoices/create-invoice">Create invoice</a>
            </Button>
        </div>
        <Table />
      </div>
    </div>
    
  )
}
