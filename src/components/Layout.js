import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
// import './Layout.css'
function Layout() {
  return (
    <div>
        <Header/>
           <Outlet/>
        <div >
            <Footer/>
        </div>
    </div>
  )
}

export default Layout