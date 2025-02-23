import React from 'react'

export default function loading() {
  return (
    <div className='flex w-full flex-col px-4 md:px-12'>
        <div className="flex justify-end px-3 md:px-8 mt-4 mb-8">
            <div className="rounded-full w-10 h-10 bg-gray-200"></div>
        </div>
        <h1 className='font-bold text-[25px] mb-4 animate-pulse'>Dashboard</h1>
      <div className="card flex flex-col md:flex-row gap-4 justify-center items-center w-full animate-pulse">
        <div className='border h-[200px] w-full md:w-[300px] bg-gray-200 '></div>
        <div className='border h-[200px] w-full md:w-[300px] bg-gray-200'></div>
        <div className='border h-[200px] w-full md:w-[300px] bg-gray-200'></div>
        <div className='border h-[200px] w-full md:w-[300px] bg-gray-200'></div>
      </div>
      <div className='flex'>
      </div>
    <div className='flex flex-col md:flex-row gap-4 justify-center items-center w-full animate-pulse mt-8'>
      <div className='w-full h-[400px] p-4'>
        <h1 className='font-bold mb-2'>Recent Revenues</h1>
        <div className='w-full h-full bg-gray-300'></div>
      </div>
      <div className='w-full h-[400px] p-4'>
        <h1 className='font-bold mb-2'>Latest Invoices</h1>
        <div className='w-full h-full bg-gray-300'></div>
      </div>
    </div>
    </div>
  )
}
