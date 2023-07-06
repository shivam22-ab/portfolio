import React, { useEffect, useState } from 'react';
import Scroll from '../components/Scroll';
import Logo from '../assets/images/Logo.svg'
import About from '../assets/images/about.svg'
import Portfolio from '../assets/images/portfolio.svg'
import Contact from '../assets/images/contact.svg'
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            // Define the scroll threshold value
            const scrollThreshold = 50;

            // Check if the user has scrolled beyond the threshold
            if (scrollTop > scrollThreshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`sticky position-fixed ${isScrolled ? '' : 'd-none'}`}>
                <div className="container box-shadow bg-white d-flex justify-content-between align-items-center px-4 py-3">
                    <Link to="/" className='sticky-logo'><img src={Logo} /></Link>
                    <a href="" className='description d-flex gap-2 align-items-center'><img src={About} /> <span className="nav-text">About</span>
                    </a>
                    <Link to="/works" className='description d-flex gap-2 align-items-center'><img src={Portfolio} /> <span className="nav-text">Portfolio</span></Link>
                    <Link to="/contact" className='description d-flex gap-2 align-items-center'><img src={Contact} /> <span className="nav-text">Contact</span></Link>
                </div>
            </div>
            <Scroll />
        </>
    )
}

export default Menu