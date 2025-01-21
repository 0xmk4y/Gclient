import { Invoices, columns } from "./columns"
import { DataTable } from "./data-table"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import ProfileSideBar from "@/components/ProfileSideBar"
import DashboardNav from "@/components/DashboardNav"


async function getData(): Promise<Invoices[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "pending",
    },
    {
      id: "728ed52f",
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "pending",
    },
    {
      id: "728ed52f",
      learner: "dkbj", 
      email: "dd",
      amount: 100,
      date: "2021-10-10",
      status: "pending",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="w-full">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
    
  )
}
