import React from 'react'
import Desk from '../assets/images/desk.svg'
import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/insta.svg'
import Linkedin from '../assets/images/linkedin.svg'

const Footer = () => {
    return (
        <div className="footer bg-white">
            <div className="container pt-5 pb-2">
                <div className="desk text-center">
                    <img src={Desk} />
                </div>
                <div className="footer-links d-flex gap-5 justify-content-center mt-4 mt-lg-5 mt-xl-5">
                    <a href="" className='paragraph'>About</a>
                    <a href="" className='paragraph'>Portfolio</a>
                    <a href="" className='paragraph'>Contact</a>
                </div>
                <div className="social-links d-flex gap-5 justify-content-center mt-5">
                    <a href=""><img src={Facebook} /></a>
                    <a href=""><img src={Linkedin} /></a>
                    <a href=""><img src={Instagram} /></a>
                </div>
                <p className="small-text text-center mt-5">
                    Copyright © 2023 Shivam. All right reserved
                </p>
            </div>
        </div>
    )
}

export default Footer