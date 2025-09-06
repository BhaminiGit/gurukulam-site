import React from 'react'
import { NavLink } from 'react-router-dom'

const ResourcesNav = () => {
  return (
    <>
      <nav className='font-belanosima text-darkblue text-2xl font-medium flex gap-5 mx-6'>
        <NavLink to="/resources/schedule">Schedules</NavLink>
        <NavLink to="/resources/updates">Updates</NavLink>
        <NavLink to="/resources/files">Files</NavLink>

      </nav>
    </>
  )
}

export default ResourcesNav