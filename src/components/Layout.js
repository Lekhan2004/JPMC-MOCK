import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <Header/>
           <Outlet/>
           <p>Dhoolikuna NGO is a dedicated organization committed to providing clean and safe drinking water to villages in Assam. Recognizing the critical need for sustainable water sources, Dhoolikuna undertakes comprehensive projects to install wells, water purification systems, and rainwater harvesting structures. Their initiatives not only aim to enhance the health and well-being of rural communities but also to educate villagers on the importance of water conservation and hygiene. Through community engagement and innovative solutions, Dhoolikuna is making a significant impact on improving access to potable water in Assam's underserved regions.</p>
        <Footer/>
    </div>
  )
}

export default Layout
