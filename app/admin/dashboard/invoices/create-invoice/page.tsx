import React from 'react'
import DashboardNav from '@/components/DashboardNav'
import Form from '../components/Form'

export default function page() {
  return (
    <div className="w-full px-3 md:px-8">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
        <h3 className='text-gray-400'>Invoices | <span className='font-bold text-black text-xl'>Create invoices</span></h3>
        <div className='flex justify-center w-full'>
            <Form />
        </div>
    </div>
  )
}
