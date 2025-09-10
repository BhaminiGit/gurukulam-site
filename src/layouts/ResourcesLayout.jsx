import React from 'react'
import { Outlet } from 'react-router-dom'
import ResourcesNav from '../components/ResourcesNav'

const ResourcesLayout = () => {
  return (
  <div className=' bg-mediumpurple items-center align-middle center min-h-90'>
  
  <h1 className='text-cream font-bold font-belanosima items-center flex justify-center text-4xl p-6'>Gurukulam Resource Hub</h1>
  <div className='bg-cream w-3/4 min-h-60 m-auto flex flex-col items-center align-middle p-3' >
    <ResourcesNav/>
    <Outlet/>
  </div>
  
  </div>)
}

export default ResourcesLayout