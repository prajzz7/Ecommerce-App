import React from 'react'
import { useParams } from 'react-router-dom'
import { featuredImages } from '../../images/featuredImages'


const Product = () => {
  const {id} = useParams()
  return (
    <>
      <img src={featuredImages[id-1].url} />
      <button>Add to Cart</button>
    </>
  )
}

export default Product