import React from 'react'

//importing styles
import '../styles/screens/home.css'

//importing patterns
import Header from '../patterns/header'
import {Hero} from '../patterns/hero'
import {Card} from '../patterns/card'
import Contact from '../patterns/contact'
import Footer from '../patterns/footer'
import ServiceCard from '../patterns/serviceCard'

//importing media assets
import landing from '../assets/images/home.jpg'
import google from '../assets/partners/google.svg'
import microsoft from '../assets/partners/microsoft.svg'
import airbnb from '../assets/partners/airbnb.svg'
import hubspot from '../assets/partners/hubspot.svg'
import fedex from '../assets/partners/fedex.svg'
import walmart from '../assets/partners/walmart.svg'
import map from '../assets/images/map.svg'
import card1 from '../assets/cards/card1.svg'
import card2 from '../assets/cards/card2.svg'
import card3 from '../assets/cards/card3.svg'
import left from '../assets/icons/left.svg'
import right from '../assets/icons/right.svg'
import mobile from '../assets/cards/mobile.svg'
import laptop from '../assets/cards/laptop.svg'
import system from '../assets/cards/system.svg'
import bot from '../assets/cards/robo.svg'
import leftarrow from '../assets/icons/leftarrow.svg'
import frame1 from '../assets/cards/frame1.svg'
import frame2 from '../assets/cards/frame2.svg'
import frame3 from '../assets/cards/frame3.svg'
import frame4 from '../assets/cards/frame4.svg'

const Home = () => {
    return (
        <div className="home">

            <div className="landing">
                <img src={landing} alt="landing" className="bg-img" />
                <Header />
                <Hero />
            </div>

            <div className="partners">
                <img src={airbnb} alt="airbnb" ></img>
                <img src={hubspot} alt="hubspot" ></img>
                <img src={google} alt="google" ></img>
                <img src={microsoft} alt="microsoft" ></img>
                <img src={walmart} alt="walmart" ></img>
                <img src={fedex} alt="fedex" ></img>
            </div>

            <div className="who-we-are">
                <div className="block-left">
                    <p className="block-title">WHO WE ARE</p>
                    <p>Text describing us, our contributions to the world and
                       the side map depicting the number of lives we have impacted
                       in various places of the world.  Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit. Pellentesque ipsum et commodo 
                       aliquet imperdiet amet.  Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.
                    </p>
                    <span className="span">Have a project idea?  Get in touch</span>
                    <span>Learn More</span>
                </div>
                <div className="block-right">
                    <div className="map-image">
                        <img src={map} alt="map" />
                    </div>
                </div>
            </div>

            <div className="card-container">
                <Card name="mission" src={card1} />
                <Card name="vission" src={card2} />
                <Card name="values" src={card3} />
            </div>

            <div className="experience"> 
                <p className="block-title">Experience you can count on </p>
                <p>Our achievement in the journey depicted in numbers</p>
                <div className="block">
                    <div>
                        <h1>50<span>+</span></h1>
                        <p>Happy Clients</p>
                    </div>
                    <div>
                        <h1>540<span>+</span></h1>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h1>50<span>+</span></h1>
                        <p>Dedicated Professionals</p>
                    </div>
                    <div>
                        <h1>5<span>+</span></h1>
                        <p>Years of Journey</p>
                    </div>
                </div>
            </div>

            <div className="work">
                <p className="block-title">Our Work</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque ipsum et commodo aliquet imperdiet amet. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button><span>See all works</span><img src={leftarrow} alt="leftarrow" /></button>
                <div className="block-image-one">
                    <div>
                        <img src={frame1} alt="frame1" />
                    </div>
                   <div>
                        <img src={frame2} alt="frame2" />
                   </div>
                </div>
                <div className="block-image-two">
                     <div>
                        <img src={frame3} alt="frame3" />
                    </div>
                    <div>
                        <img src={frame4} alt="frame4" />
                   </div>
                </div>

            </div>

            <div className="services">
                <div className="block-header">
                    <div>
                        <p className="block-title">Our services would be your best benefit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Malesuada tristique id facilisi metus rhoncus,
                              nunc est. Cras pulvinar.
                        </p>
                    </div>
                    <div>
                        <img src={left} alt="left" style={{marginRight:16}} />
                        <img src={right} alt="right" />
                    </div>
                </div>
                <div className="block-card">
                    <ServiceCard name="UI & UX Designing"  src={mobile} />
                    <ServiceCard name="Web Development" src={laptop} type="inverse" />
                    <ServiceCard name="App Development" src={system} />
                    <ServiceCard name="Bot Development" src={bot} type="inverse" />
                </div>
            </div>

            <div className="slider">
                <p className="block-title">Trying is Believing</p>
                <p>See what our clients are saying about our unique and effective formulas.</p>
            </div>

            <div style={{background:'#000'}}>
                <Contact />
            </div>

            <Footer />

        </div>
    )
}

export default Home
