import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const About = () => {
    return (
        <>
        <Navbar />
        <div className='about'>
            <div className="container">
                <h1 className="title">About</h1>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default About