import React, { useEffect, useState } from 'react'
import { images } from '../../images/images'
import './Slider.scss'
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Slider = () => {
    const [slide, setSlide] = useState(0)
    useEffect(()=>{
        console.log(slide)
    },[slide])
    function left(){
        setSlide( slide === 0 ? (images.length-1) : (prev => prev - 1) )
    }
    function right(){
        setSlide( slide === images.length-1 ? (0):(prev => prev + 1))
    }
    return (
        <div className="slider">
            <div className='img-container' style={{width: `${100*images.length}vw`,transform: `translateX(${-100*slide}vw)`,transition: 'transform 1s ease'}}>
                {images.map(image=>(
                    <img src={image}  alt='clothing-image' />
                ))}
            </div>
            <div className="buttons-container">
                <div className="button-icon" onClick={left}>
                    <ArrowLeft />
                </div>
                <div className="button-icon" onClick={right}>
                    <ArrowRight />
                </div>

            </div>
        </div>

    )
}

export default Slider