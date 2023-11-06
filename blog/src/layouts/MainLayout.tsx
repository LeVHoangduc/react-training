import SideBar from './SideBar/SideBar'

import React from 'react'

export default function MainLayout() {
  return (
    <div className='flex flex-col h-full md:flex-row'>
      <SideBar />
    </div>
  )
}
