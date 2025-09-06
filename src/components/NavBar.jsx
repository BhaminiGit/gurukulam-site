import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = (pagetitle="Home") => {
  return (
    <>
        
      <header className="flex items-end  justify-self-center mb-3"  >

        <img className="w-30 h-auto" src="/assets/ganeshaTransparent.png" alt="ganesha picture" />

        <div className='centerSection flex flex-col items-center' >
          <img className="w-auto h-20 mb-1" src="/assets/ahtGurukulamLogo.png" alt="Austin Gurukulam" />
          <nav className='font-belanosima text-darkpurple text-3xl font-medium flex gap-5 mx-30 mb-2'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resources/login">Resources</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="">Volunteer</NavLink>
            <NavLink to="">Gallery</NavLink>
          </nav>
        </div>

        <img className="w-30 h-auto"  src="/assets/saraswati.png" alt="saraswati picture" />
      </header>

    
    </>
  )
}

export default NavBar