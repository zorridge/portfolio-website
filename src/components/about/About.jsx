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
                    <div className='about__content grid'>
                        <blockquote className='about__quote'>
                            <p>
                                I’m an early bird and I’m a night owl so I’m
                                wise and I have worms.
                            </p>
                        </blockquote>
                        <div className='about__details'>
                            <div className='about__description'>
                                <p>
                                    I am a highly motivated individual with
                                    strong backgrounds in full stack web
                                    development and Flutter mobile development
                                </p>
                                <br />
                                <p>
                                    I am constantly seeking out new
                                    opportunities to challenge myself, as I
                                    believe it is only under pressure that we
                                    can unlock our fullest potential.
                                </p>
                            </div>

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
                </div>
            </div>
        </section>
    );
};

export default About;
