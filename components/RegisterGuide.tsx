import React from 'react'
import Round from './ui/Round'

export default function RegisterGuide() {
  return (
    <div className='m flex'>
        <div className='h-[400px] w-4 border border-[#D1E5F8] flex flex-col items-center gap-10'>
            <Round />
            <Round />
            <Round />
        </div>
    </div>
  )
}
