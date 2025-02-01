import DashboardNav from '@/components/DashboardNav'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'

import { DataTable } from './data-table'
import { Leaner, columns } from './columns'
import Table from './components/Table'


async function getData(): Promise<Leaner[]> {
  // Fetch data from your API here.
  return [
    {
      learner: "dkbj", 
      course: "dd",
      amount: 100,
      date: "2021-10-10",
      gender: "Male",
    },
    {
      learner: "dkbj", 
      course: "dd",
      amount: 100,
      date: "2021-10-10",
      gender: "Male",
    },
    {
      learner: "dkbj", 
      course: "dd",
      amount: 100,
      date: "2021-10-10",
      gender: "Male",
    },
    {
      learner: "dkbj", 
      course: "dd",
      amount: 100,
      date: "2021-10-10",
      gender: "Male",
    },
    {
      learner: "dkbj", 
      course: "dd",
      amount: 100,
      date: "2021-10-10",
      gender: "Male",
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
          <SearchBar placeholder="Search Leaner" />
            <Button className="h-10 w-[200px] text-white font-bold">
              <a href="/admin/learners/create-learner">Create Learner</a>
            </Button>
        </div>
        <Table />
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
)}
