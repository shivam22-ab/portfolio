import React from 'react'
import Arrow from '../assets/images/Arrow.svg';
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <>
            <Navbar />
            <div className="body position-relative">
                <div className="container">
                    <div className="row d-flex index">
                        <div className="col-12 col-lg-6" data-aos="zoom-in">
                            <h1 className='title'>Programming Enthusiast & Laravel Developer</h1>
                            <p className="paragraph light-color mt-3 mt-lg-4">I believe in empowering my knowledge by harnessing the power
                                of programming. Keep regular update with technologies as it is
                                evolving day by day.
                            </p>
                            <div className="see-work my-5 d-flex align-items-center pointer">
                                <Link to="/projects" className='small-paragraph text-uppercase'><span className="mid-text">See m</span>y works</Link>
                                <img src={Arrow} />
                            </div>
                            <div className="contact-links d-flex gap-4">
                                <a href="#">Github</a>/
                                <a href="#">LinkedIn</a>/
                                <a href="">Gmail</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 home_img" data-aos="zoom-in">
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
            <Skills />
            <Work />
            <Footer />
        </>
    )
}

export default Index