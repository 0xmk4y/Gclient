import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  redirect('/admin/login')
  return (
    //      if auth
    //          /dashaboard
    //      else
    //          /login
    <div>page</div>
  )
}
