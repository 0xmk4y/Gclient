import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import ProfileSideBar from './ProfileSideBar'

export default function DashboardNav() {
  return (
    <nav className="flex justify-center items-center h-fit gap-2">
        <div className="h-fit py-3">
          <ThemeSwitcher />
        </div>

        <div className="py-2">
          <ProfileSideBar />
        </div>
      </nav>
  )
}
