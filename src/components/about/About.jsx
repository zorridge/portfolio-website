import React from 'react';
import './about.css';
import Info from './Info';

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section__title'>About Me</h2>
            <span className='section__subtitle'>Here's who I am</span>
            <div className='about__container container'>
                {/* <img src={AboutImg} alt='about' className='about__img' /> */}
                <div className='about__data'>
                    <Info />
                    <p className='about__description'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Rem, fuga. Natus repellat corporis itaque eveniet
                        quasi ex esse, enim excepturi? Quod, qui dolor explicabo
                        nemo laboriosam repudiandae similique libero at!
                    </p>

                    <a
                        href='https://www.google.com'
                        className='button button--flex'>
                        Download Resume
                        <i className='uil uil-file-download about__button-icon' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
