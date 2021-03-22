import React from 'react'

import Header from '../patterns/header'
import Footer from '../patterns/footer'

//importing styles
import '../styles/screens/ourwork.css'

//importing media assets
import ourworkImg from '../assets/images/ourwork.png'

const OurWork = () => {
    return (
        <>
            <div className="ourwork">
                <div className="ourwork-landing">
                    <img src={ourworkImg} alt="ourwork" className="bg-img" />
                    <Header />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OurWork
