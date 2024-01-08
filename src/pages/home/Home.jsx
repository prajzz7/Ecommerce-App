import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import { useParams } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Slider/>
      <FeaturedProducts/>
    </>
  )
}

export default Home