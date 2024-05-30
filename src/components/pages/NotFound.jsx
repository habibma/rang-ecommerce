import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='not-found-container'>
                <h1>Sorry, The page you were looking for was not found!</h1>
                <Link to='/'><Button type='primary'>Go to the Home Page</Button></Link>
            </div>
            <Footer />
        </>
    )
}

export default NotFound