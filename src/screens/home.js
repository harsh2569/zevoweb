import React from 'react'

//importing styles
import '../styles/screens/home.css'

//importing patterns
import Header from '../patterns/header'
import Hero from '../patterns/hero'
import Card from '../patterns/card'
import Contactus from './contactus'

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
import Footer from '../patterns/footer'

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
                <div>
                    <img src={map} alt="map" />
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

            <Contactus />

            <Footer />

        </div>
    )
}

export default Home
