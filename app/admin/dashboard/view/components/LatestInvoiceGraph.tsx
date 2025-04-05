"use client";
import React, { use } from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Invoice } from '@/types/types';
import { createClient } from '@/app/utils/supabase/client';


export default async function LatestInvoiceGraph() {

  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    async function fetchInvoices() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("invoices")
        .select("*, learner_id:learners(*)");
      console.log(data)
      if (data) setInvoices(data);
    }
    fetchInvoices();
  }, []);

  return (
    <div className='flex bg-gray-100 p-3 min-h-full rounded-md '>
      <div className='flex flex-col gap-4 border w-full bg-white'>
        {invoices.map((invoice: any) => (
          <div key={invoice.id}>
            <div className='flex justify-between items-center px-3 py-1 hover:bg-gray-100 pb-2'>
              <div className='flex items-center gap-8'>
                <Image
                  src={'./profile-icon.svg'}
                  alt=''
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div className=''>
                  <p className='font-bold'>{invoice.learner_id.firstname + " " + invoice.learner_id.lastname}</p>
                  <p>Software Engineering</p>
                </div>
              </div>
              <p className='font-bold'>$ {invoice.amount}</p>
            </div>
            <hr className='mx-4 ' />
          </div>
        ))}
      </div>
    </div>
  )
}
