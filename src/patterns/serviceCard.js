import React from 'react'

//importing styles
import '../styles/patterns/serviceCard.css'

const ServiceCard = ({ name, src, type }) => {
    return (
        <div className="service-card" style={{
            flexDirection:type==="inverse"?'column-reverse':'column'
        }}
        >
            <div>
                <p className="card-title">{name}</p>
                <p>Lorem ipsum dolor sit amet elit consectetur adipiscing 
                    elit. Tristique id facilisi metus rhoncus, nunc est.
                </p>
            </div>
            <div className="image">
                <img  src={src} alt="dev" />
            </div>
        </div>
    )
}

export default ServiceCard
