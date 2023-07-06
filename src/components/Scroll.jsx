import { useState, useEffect } from 'react'
import ArrowTop from '../assets/images/arrowtop.svg'

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const scrollThreshold = 50;

            setIsVisible(scrollTop > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="scroll pointer position-fixed" onClick={scrollToTop}>
            <img src={ArrowTop} alt="Scroll to Top" />
            <span className="description text-uppercase">Scroll Top</span>
        </div>
    );
};

export default Scroll;
