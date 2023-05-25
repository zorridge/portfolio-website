import React from 'react';
import './about.css';

import Info from './Info';
import Resume from '../../assets/resume_ZhouZiheng.pdf';

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
                        <p>
                            I am an undergraduate student in Nanyang
                            Technological University's Renaissance Engineering
                            Programme (REP), pursuing a Bachelor of Engineering
                            Science (Computer Science) concurrently with a M.Sc.
                            in Technology Management.
                        </p>
                        <br />
                        <p>
                            I am a highly motivated individual with experiences
                            in full stack web development and Flutter mobile
                            development. I thrive under pressure and I am always
                            looking for the next exciting opportunity to
                            challenge myself. Find out more about me below!
                        </p>
                    </p>

                    <a
                        href={Resume}
                        className='button button--flex'
                        target='_blank'
                        rel='noreferrer'>
                        Download Resume
                        <i className='uil uil-file-download about__button-icon' />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
