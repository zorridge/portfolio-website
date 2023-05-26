import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Data = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'I am a <span class="home__subtitle-highlight">learner</span>',
                'I am a <span class="home__subtitle-highlight">problem solver</span>',
                'I am a <span class="home__subtitle-highlight">software engineer</span>',
                'and sometimes a <span class="home__subtitle-highlight">guitarist</span>'
            ],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 800,
            loop: true,
            showCursor: true
        });

        return () => typed.destroy();
    }, []);

    return (
        <div className='home__data'>
            <h1 className='home__title'>Zhou Ziheng</h1>
            <h3 className='home__subtitle'>
                &nbsp;
                <span ref={el} />
            </h3>
            <p className='home__description'>
                Undergraduate at Renaissance Engineering Programme, Nanyang
                Technological University
            </p>
            <a href='#contact' className='button button--flex'>
                Get In Touch
                <i class='uil uil-comment home__button-icon' />
            </a>
        </div>
    );
};

export default Data;
