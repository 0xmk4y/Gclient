"use client";
import DashboardNav from '@/components/DashboardNav'
import React from 'react'
import { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar'
import { Learner } from '@/types/types'
import Table from './components/Table'
import Link from 'next/link'
import { createClient } from '@/app/utils/supabase/client';


export default async function page() {
  const [learners, setLearners] = useState<Learner[]>([]);

  useEffect(() => {
    async function fetchLearners() {
      try {
        const supabase = createClient();
        const { data } = await supabase.from("learners").select("*");
        if (data){
          console.log(data)
          setLearners(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchLearners();
  }, [])
    
  
  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      <div className="container mx-auto w-full">
        <h3 className="font-bold mb-8">Learners</h3>
        <div className="flex gap-8 mb-8">
          <SearchBar placeholder="Search Leaner" />
          {/* <Link href="/admin/dashboard/learners/create-learner" className="w-[200px] text-center py-2 text-white font-bold bg-primary">Create learner</Link> */}
        </div>
        <Table learners={learners} />
        {/* <DataTable columns={columns} data={data} /> */}
      </div>
    </div>
)}


