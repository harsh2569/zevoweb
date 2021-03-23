import React from 'react'

import { Link } from 'react-router-dom'

//importing styles
import '../styles/patterns/sidebar.css'

const Sidebar = ({ toggleSidebar }) => {
    return (
        <div className="sidebar">
            <span className="close" onClick={toggleSidebar}>X</span>
            <div className="navbar">
               <Link to="/about">About us</Link>
               <Link to="/our_work">Our work</Link>
               <Link to="/services">Services</Link>
               <Link to="/careers">Careers</Link>
               <Link to="/contactus">Contact us</Link>
            </div>
        </div>  
    )
}

export default Sidebar
