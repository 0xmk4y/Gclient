import React from 'react'
import DashboardNav from '@/components/DashboardNav'

export default function page() {
  return (
    <div className="w-full">
      <div className="flex justify-end w-full p-3">
        <DashboardNav />
      </div>
      {/* <h2>Dashboard</h2> */}
    </div>
  )
}
