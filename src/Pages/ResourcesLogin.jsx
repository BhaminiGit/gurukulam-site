import React from 'react'
import { NavLink } from 'react-router-dom'

const ResourcesLogin = () => {
  return <>

    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative text-center py-8 shadow-2xl"
        style={{
          background: `linear-gradient(135deg, #957FEF 0%, #7161EF 50%, #150946 100%)`,
          color: '#FFF1EA'
        }}>
        <div className="animate-fadeIn">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-2xl"
            style={{ fontFamily: 'Belanosima, sans-serif' }}>
            Grurukulam Resources
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full shadow-lg"
            style={{ background: 'linear-gradient(90deg, #B79CED, #DEC0F1)' }}></div>
        </div>

      </header>

      {/* Content area that takes remaining space */}
      <div className="flex-grow relative">
        <div className='block resourcesBG relative h-full'>
          <div className='resourcesBox relative bg-white opacity-80 h-150 w-150 border-20 m-0 border-darkblue'></div>

          {/* Your positioning stays exactly the same */}
          <h2 className='absolute top-35 max-w-110 text-center text-darkblue text-3xl font-belanosima font-semibold'>
            Welcome to the resource hub for our community
          </h2>

          <div className='absolute text-center top-60'>
            <h3 className='font-semibold text-2xl text-darkblue'>Class Schedules</h3>
            <h3 className='font-semibold text-2xl text-darkblue'>Class updates</h3>
            <h3 className='font-semibold text-2xl text-darkblue'>Files and Documents</h3>
            <h4 className='font-light italic w-100 pt-3'>
              Access is limited to current members and <br />
              recipients of our official emails.
            </h4>
          </div>

          <div className='passwordSection absolute top-110'>
            <h2 className='text-center text-darkblue text-3xl font-belanosima font-semibold'>
              Enter Password
            </h2>
            <input type='password' className="block border-[2px] bg-white border-darkblue m-auto" />
            <div className='h-2'></div>
            <NavLink to={'/resources/schedule'} className='loginButton block m-auto text-center border-2 pt-0 px-3 text-l rounded-2xl'>
              Submit
            </NavLink>
          </div>

          <p className='absolute top-140 text-sm font-light italic text-center'>
            Password is updated every semester. <br />
            Contact us if you need help accessing the page
          </p>
        </div>
      </div>
    </div>
  </>
}

export default ResourcesLogin