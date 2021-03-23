import React from 'react'

//importing styles
import '../styles/patterns/card.css'

export const Card = ({name,src}) => {
    return (
        <div className="card">
            <p className="card-title">{name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Viverra netus consectetur donec diam, 
                et volutpat fames enim. 
            </p>
            <img src={src} alt="card" className="card-image" />
        </div>
    )
}

export const CareerCard = ({ title, src }) => {
    return (
        <div className="careerCard">
            <img src={src} alt="card" />
            <p className="card-title">{title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices in amet lacus, venenatis, sit eget placerat.
                Ac sit viverra in.
            </p>
        </div>
    )
}
