import React from 'react'
import { NavLink } from 'react-router-dom'

const ResourcesLogin = () => {
  return <>
       <div className='block resourcesBG' >

        <div className='resourcesBox relative bg-white opacity-80 h-150 w-150 border-20 m-0 border-darkblue '></div>
          <h2 className='absolute top-75 max-w-110 text-center text-darkblue text-3xl font-belanosima font-semibold '>Welcome to the resource hub for our community</h2>
          <div className='absolute text-center top-100'>
            <h3 className='font-semibold text-2xl text-darkblue '>Class Schedules</h3>
            <h3 className='font-semibold text-2xl text-darkblue'>Class updates</h3>
            <h3 className='font-semibold text-2xl text-darkblue'>Files and Documents</h3>
         
          <h4 className=' font-light italic w-100 pt-3'>Access is limited to current members and <br/> recipietns of our official emails. </h4>
         </div>
          <div className='passwordSection absolute top-150' >
          
            <h2 className='text-center text-darkblue text-3xl font-belanosima font-semibold '>Enter Password</h2>
            <input type='password' className=" block border-[2px] bg-white border-darkblue m-auto"></input>
            <div className='h-2'></div>
            <NavLink to={'/resources/schedule'} className='loginButton block m-auto text-center border-2 pt-0 px-3 text-l rounded-2xl '> Submit</NavLink>
          </div>

          <p className='absolute top-180 text-sm font-light italic text-center'>
            Password is updated every semester. <br/>
            Contact us if you need help accessing the page</p>
       
       </div>
  </>
}

export default ResourcesLogin