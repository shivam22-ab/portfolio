import React from 'react'
import Html from '../assets/images/html.svg'
import Css from '../assets/images/css.svg'
import Js from '../assets/images/js.svg'
import Bootstrap from '../assets/images/bootstrap.svg'
import ReactLogo from '../assets/images/react.svg'
import Laravel from '../assets/images/laravel.svg'
import Chart from '../assets/images/chartjs.svg'
import Asp from '../assets/images/asp.svg'
import Postman from '../assets/images/postman.svg'
import Git from '../assets/images/git.svg'


const Skills = () => {
    return (
        <>
            <div className="skills d-block">
                <div className="container py-5">
                    <h1 className="mid-title mb-5" data-aos="slide-right" data-aos-anchor-placement="top-bottom">
                        Tech Stacks
                    </h1>
                    <div className="row d-flex justify-content-between px-3">
                        <div className="left-col col-12 col-lg-5 bg-white pt-4 pb-5 mb-5 mb-lg-0 md-xl-0 box-shadow" data-aos="slide-right" data-aos-anchor-placement="top-bottom">
                            <div className='mb-3'>
                                <h5 className="mid-paragraph">Front End</h5>
                            </div>
                            <div className="icons d-flex justify-content-between">
                                <img src={Html} className='pointer' />
                                <img src={Css} className='pointer' />
                                <img src={Js} className='pointer' />
                                <img src={Bootstrap} className='pointer' />
                                <img src={ReactLogo} className='pointer' />
                            </div>
                        </div>
                        <div className="right-col col-12 col-lg-5 bg-white pt-4 pb-5 pb-sm-3 box-shadow" data-aos="slide-left" data-aos-anchor-placement="top-bottom">
                            <div className='mb-3'>
                                <h5 className="mid-paragraph">Back End</h5>
                            </div>
                            <div className="icons d-flex justify-content-between">
                                <img src={Laravel} className='pointer' />
                                <img src={Postman} className='pointer' />
                                <img src={Git} className='pointer' />
                                <img src={Chart} className='pointer' />
                                <img src={Asp} className='pointer' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills