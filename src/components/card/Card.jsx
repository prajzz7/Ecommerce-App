import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ image }) => {
    return (
        <Link >
            <div className='card'>
                <img src={image.url} />
            </div>
        </Link>

    )
}

export default Card