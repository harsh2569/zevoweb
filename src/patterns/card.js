import React from 'react'

//importing styles
import '../styles/patterns/card.css'

const Card = ({name,src}) => {
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

export default Card
