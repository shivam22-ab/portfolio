import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/css/contact.css'
import Send from '../assets/images/send.svg'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact">
                <div className="container" data-aos="slide-right">
                    <h1 className="title mt-5 mb-4" >
                        Get in touch.
                    </h1>
                    <p className="paragraph text-secondary">
                        Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
                    </p>
                    <div className="form my-5">
                        <input className='d-block mt-5' type="text" placeholder='Name' />
                        <input className='d-block mt-5' type="text" placeholder='Email' />
                        <input className='d-block mt-5' type="text" placeholder='Subject' />
                        <textarea className='d-block mt-5' type="text" rows={5} placeholder='Message'></textarea>
                        <div className="button mt-5">
                            <button className='send text-uppercase'>Send <img src={Send} className='mb-1' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact