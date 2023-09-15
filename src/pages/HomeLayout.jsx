import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

function HomeLayout() {
  return (
    <>
        <Header/>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default HomeLayout