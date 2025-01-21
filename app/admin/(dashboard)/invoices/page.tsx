import { Invoices, columns } from "./columns"
import { DataTable } from "./data-table"


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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
