import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

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