import React from 'react'
import { Link } from 'react-router-dom'

//importing styles
import '../styles/patterns/header.css'

//importing media assets
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className="header">
           <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
           <nav>
               <Link to="/about">About us</Link>
               <Link to="/our_work">Our work</Link>
               <Link to="/services">Services</Link>
               <Link to="/careers">Careers</Link>
               <Link to="/contactus">Contact us</Link>
           </nav>
        </div>
    )
}

export default Header
