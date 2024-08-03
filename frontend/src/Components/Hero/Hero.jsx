import React from 'react'
import './Hero.css'
import next from '../../assets/next.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <p>Sport Cars</p>
                <h2>START YOUR ENGINE</h2>
                <a href="#">
                    Discover the Ferrari lineup <img src={next} alt="Next" />
                </a>
            </div>
        </div>
    )
}

export default Hero