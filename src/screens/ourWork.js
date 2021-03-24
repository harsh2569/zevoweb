import React from 'react'

import Header from '../patterns/header'
import { HeroCenter } from '../patterns/hero'
import Footer from '../patterns/footer'

//importing styles
import '../styles/screens/ourwork.css'

//importing media assets
import ourworkImg from '../assets/images/ourwork.png'
import idea from '../assets/images/idea.svg'
import frame1 from '../assets/cards/frame1.svg'
import frame2 from '../assets/cards/frame2.svg'
import frame3 from '../assets/cards/frame3.svg'
import frame4 from '../assets/cards/frame4.svg'
import frame5 from '../assets/cards/frame5.svg'
import frame6 from '../assets/cards/frame6.svg'

const OurWork = () => {
    return (
        <>
            <div className="ourwork">
                <div className="ourwork-landing">
                    <img src={ourworkImg} alt="ourwork" className="bg-img" />
                    <Header />
                    <HeroCenter title="Our Work" />
                </div>

                <div className="image-container">
                    <div className="block-one">
                        <div>
                            <img src={frame1} alt="frame1" />
                        </div>
                        <div>
                            <img src={frame2} alt="frame2" />
                        </div>
                    </div>
                    <div className="block-two">
                        <div>
                            <img src={frame3} alt="frame3" />
                        </div>
                        <div>
                            <img src={frame4} alt="frame4" />
                        </div>
                    </div>
                    <div className="block-one">
                        <div>
                            <img src={frame5} alt="frame5" />
                        </div>
                        <div>
                            <img src={frame6} alt="frame6" />
                        </div>
                    </div>

                    <div className="work-block">
                        <div className="block-left">
                            <p className="block-title">Like</p>
                            <p className="block-title">What</p>
                            <p className="block-title">You See?</p>
                            <p style={{margin:'2em 0',color:'#f7f7f7',lineHeight:'25px'}}>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                               justo morbi turpis ultricies velit sit. At euismod velit
                               congue eget molestie. Dui mattis nunc varius facilisi 
                               tempus sed sit ultricies. Purus vel neque dolor at. 
                            </p>
                            <button className="primary-btn">Tell us your project idea</button>
                        </div>
                        <div className="block-right">
                            <img src={idea} alt="idea" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OurWork
