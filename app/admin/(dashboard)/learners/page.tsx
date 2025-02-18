import DashboardNav from '@/components/DashboardNav'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { Leaner, columns } from './columns'
import { Learner } from '@/types/types'
import Table from './components/Table'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
  

async function getLeaners(): Promise<Learner[]> {
  try{
    const learners = await prisma.learner.findMany({});
    console.log(learners);
    return learners;
  } catch (error) {
    console.error("Error fetching learners:", error);
    return [];
  }
}

export default async function page() {
  const learners = await getLeaners()
  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="container mx-auto w-full">
        <h3 className="font-bold mb-8">Learners</h3>
        <div className="flex gap-8">
          <SearchBar placeholder="Search Leaner" />
            <Button className="h-10 w-[200px] text-white font-bold">
              <a href="/admin/learners/create-learner">Create Learner</a>
            </Button>
        </div>
        <Table learners={learners} />
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
)}
