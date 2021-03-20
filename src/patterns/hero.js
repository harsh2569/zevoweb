import React from 'react'
import { Link } from 'react-router-dom'

//importing styles
import '../styles/patterns/hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="layer-one">
                <span>Thing</span>
                <span>Design</span>
                <span>Build</span>
            </div>
            <p className="title">Bring your amazing ideas to life.</p>
            <p className="text">Zevo Corporation is an experienced and passionate group of
                designers, developers, project managers, writers and artists.
                The general purpose of Zevo Corporation is to develop and
                promote advanced information technologies for multi-user operation.
            </p>
            <div className="layer-two">
                <button>Get in touch</button>
                <Link to="/our_work">See our work</Link>
            </div>
        </div>
    )
}

export default Hero
