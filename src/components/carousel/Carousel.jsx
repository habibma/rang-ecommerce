import React, { useState } from 'react'
import './carousel.scss'
import Image from '../Image/Image'


const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(1)

    const nextSlide = () => {
        setSlide(prevState => prevState === data.length - 1 ? 0 : prevState + 1)
    }

    const prevSlide = () => {
        setSlide(prevState => prevState === 0 ? data.length - 1 : prevState - 1)
    }

    return (
        <div className='carousel'>
            <span onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow arrow-left">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </span>
            {data.map((item, index) => {
                return <Image key={index} className={slide === index ? 'slide' : 'slide-hidden'} src={item.src} alt={item.alt}></Image>
            })}
            <span onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow arrow-right">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} className={slide === idx ? 'indicator active' : 'indicator'} onClick={() => setSlide(idx)}></button>
                })}
            </span>
        </div>
    )
}

export default Carousel