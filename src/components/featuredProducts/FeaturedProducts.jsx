import React from 'react'
import './FeaturedProducts.scss'
import { featuredImages } from '../../images/featuredImages'
import Card from '../card/Card'

const FeaturedProducts = () => {
  return (
    <div className='featuredProducts'>
        <div className="description">
            <h2 className="title">
                Featured Products
            </h2>
            <p className="content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting .
            </p>
        </div>
        <div className="images"> 
            {featuredImages.map(image=>(
                <Card image={image} key={image.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts