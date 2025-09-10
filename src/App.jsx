import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'

import React from 'react'
import MainLayout from "./layouts/MainLayout"
import HomePage from "./Pages/HomePage"

import ResourcesLogin from "./Pages/ResourcesLogin"
import Registration from "./Pages/Registration"
import ResourcesSchedule from "./Pages/ResourcesSchedule"
import ResourcesLayout from "./layouts/ResourcesLayout"
import ResourcesUpdates from "./Pages/ResourcesUpdates"
import ResourcesFiles from "./Pages/ResourcesFiles"
import AboutPage from "./Pages/AboutPage"


const App = () => {


  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/resources/login" element={<ResourcesLogin />} />

        <Route path="/resources" element={<ResourcesLayout />}>
          <Route path="/resources/schedule" element={<ResourcesSchedule />} />
           <Route path="/resources/updates" element={<ResourcesUpdates />} />
            <Route path="/resources/files" element={<ResourcesFiles />} />
        </Route>



        <Route path="/register" element={<Registration expired={false} />} />

      </Route>
    )


  );
  return <RouterProvider router={router} />;

}

export default App



