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
                <div className='about__data'>
                    <Info />
                    <p className='about__description'>
                        <p>
                            I am an undergraduate student in Nanyang
                            Technological University's{' '}
                            <span className='about__highlight'>
                                Renaissance Engineering Programme (REP)
                            </span>
                            , pursuing a{' '}
                            <span className='about__highlight'>
                                {' '}
                                Bachelor of Engineering Science (Computer
                                Science)
                            </span>{' '}
                            concurrently with a{' '}
                            <span className='about__highlight'>
                                M.Sc. in Technology Management
                            </span>
                            .
                        </p>
                        <br />
                        <p>
                            I am a highly motivated individual with a strong
                            background in{' '}
                            <span className='about__highlight'>
                                full stack web development{' '}
                            </span>
                            and{' '}
                            <span className='about__highlight'>
                                {' '}
                                Flutter mobile development
                            </span>
                            . I am constantly seeking out new opportunities to
                            challenge myself, as I firmly believe it is only
                            under pressure that we can unlock our fullest
                            potential.
                        </p>
                        {/* <br />
                        <p>Discover more about me below!</p> */}
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
