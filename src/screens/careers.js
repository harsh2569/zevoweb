import React from 'react'

import Header from '../patterns/header'
import Footer from '../patterns/footer'

//importing styles
import '../styles/screens/careers.css'

//importing media assets
import careerImg from '../assets/images/careers.png'

const Careers = () => {
    return (
        <>
            <div className="career">
                <div className="career-landing">
                    <img src={careerImg} alt="career" className="bg-img" />
                    <Header />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Careers
