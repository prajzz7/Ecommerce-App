import React from 'react'
import './Card.scss'
import { Link, useParams } from 'react-router-dom'

const Card = ({ image }) => {
    
    return (
        <Link to={`/product/${image.id}`}>
            <div key={image.id} className='card'>                
                <img src={image.url} />
            </div>
        </Link>

    )
}

export default Card