import React from 'react'
import { Outlet } from 'react-router-dom'
import ResourcesNav from '../components/ResourcesNav'

const ResourcesLayout = () => {
  return (
  <div className=' bg-purple items-center align-middle center min-h-40'>
  
  <h1 className='text-cream font-bold font-belanosima text-2xl'>Gurukulam Resource Hub</h1>
  <div className='bg-cream w-3/4  m-auto flex ' >
    <ResourcesNav/>
    <Outlet/>
  </div>
  
  </div>)
}

export default ResourcesLayout