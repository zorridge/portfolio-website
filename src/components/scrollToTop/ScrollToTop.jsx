import React, { useState, useEffect } from 'react';
import './scrollToTop.css';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenHeight = window.innerHeight;
            const threshold = screenHeight * 0.5;

            if (scrollPosition > threshold) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a href='#home' className={`scrollup ${showScroll && 'show-scroll'}`}>
            <i className='uil uil-arrow-up scrollup__icon' />
        </a>
    );
};

export default ScrollToTop;
