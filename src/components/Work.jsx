import React from 'react'
import Arrow from '../assets/images/Arrow.svg';
import Fyp from '../assets/images/fyp.png'

const Work = () => {
    return (
        <>
            <div className="work bg-white">
                <div className="container py-3">
                    <div className="heading" data-aos="slide-right">
                        <h1 className="mid-title my-4">
                            Crafted with love.
                        </h1>
                        <p className="paragraph mb-3 mb-lg-5 mb-xl-5">These are a selection of my recent work</p>
                    </div>
                </div>
            </div>
            <div className="work-details position-relative pointer" data-aos="slide-right">
                <div className="container">
                    <div className="contents">
                        <div className="row">
                            <div className="col-lg-8 px-0">
                                <h1 className="low-title title-animation">
                                    E-Tournament Performance Tracker
                                </h1>
                                <p className="paragraph">Web Application: Python & Laravel</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="see-work project mt-5 mb-0 mb-md-5 mb-lg-5 mb-xl-5 d-flex align-items-center justify-content-end pointer">
                                    <p className='small-paragraph text-uppercase'><span className="mid-text">View</span> project</p>
                                    <img src={Arrow} className='mb-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="work-details" data-aos="slide-right">
                <div className="container">
                    <div className="contents">
                        <div className="row">
                            <div className="col-lg-8 px-0">
                                <h1 className="low-title title-animation">
                                    Food Pokhara
                                </h1>
                                <p className="paragraph">Web Application: .NET MVC</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="see-work project mt-5 mb-0 mb-md-5 mb-lg-5 mb-xl-5 d-flex align-items-center justify-content-end pointer">
                                    <p className='small-paragraph text-uppercase'><span className="mid-text">View</span> project</p>
                                    <img src={Arrow} className='mb-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="work-details" data-aos="slide-right">
                <div className="container">
                    <div className="contents">
                        <div className="row">
                            <div className="col-lg-8 px-0">
                                <h1 className="low-title title-animation">
                                    Rangin Technology
                                </h1>
                                <p className="paragraph">Web Application: Laravel</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="see-work project mt-5 mb-0 mb-md-5 mb-lg-5 mb-xl-5 d-flex align-items-center justify-content-end pointer">
                                    <p className='small-paragraph text-uppercase'><span className="mid-text">View</span> project</p>
                                    <img src={Arrow} className='mb-3' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work