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
                    <HeroCenter title="We are digital storytellers" page="about" />
                </div>

                <div className="story">
                    <div>
                        <p className="block-title">and this is our story...</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mattis purus fermentum, turpis eget sapien. Mauris est 
                            etiam enim pulvinar purus id. Libero iaculis nisi diam 
                            fusce eget. Pretium, erat quis vitae, orci interdum ante.
                            Phasellus est leo congue purus tempus aliquam morbi.
                            Libero ornare arcu diam iaculis vulputate vel facilisis 
                            aliquam faucibus.
                        </p>
                        <button>Have a project idea?  Get in touch</button>
                    </div>
                    <div className="video">

                    </div>
                </div>

                <div className="process">
                    <p className="block-title">The process we follow</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Mattis purus fermentum, turpis eget sapien. Mauris est 
                       etiam enim pulvinar purus id. Libero iaculis nisi diam fuss. 
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
