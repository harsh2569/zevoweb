import React from 'react'

import Header from '../patterns/header'
import Footer from '../patterns/footer'
import { HeroCenter } from '../patterns/hero'

//importing styles
import '../styles/screens/about.css'

//importing media assets
import aboutImg from '../assets/images/about.png'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-landing">
                    <img src={aboutImg} alt="about" className="bg-img" />
                    <Header />
                    <HeroCenter />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
