import React, { useState } from 'react';
import './experiences.css';

const Experiences = () => {
    const [toggleTab, setToggleTab] = useState(2);

    const toggleTabHandler = tab => {
        setToggleTab(tab);
    };

    return (
        <section className='qualification section' id='experiences'>
            <h2 className='section__title'>Experiences</h2>
            <span className='section__subtitle'>The places I have been to</span>
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    {/* Education Button */}
                    <div
                        className={`qualification__button button--flex ${
                            toggleTab === 1 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTabHandler(1)}>
                        <i className='uil uil-university qualification__icon' />{' '}
                        Education
                    </div>

                    {/* Work Button */}
                    <div
                        className={`qualification__button button--flex ${
                            toggleTab === 2 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTabHandler(2)}>
                        <i className='uil uil-constructor qualification__icon' />{' '}
                        Work
                    </div>
                </div>

                <div className='qualification__sections'>
                    {/* Education */}
                    <div
                        className={`qualification__content ${
                            toggleTab === 1
                                ? 'qualification__content-active'
                                : ''
                        }`}>
                        {/* NTU */}
                        <div className='qualification__data'>
                            <div>
                                <div className='qualification__headline'>
                                    <img
                                        src={require('../assets/ntu-logo.jpeg')}
                                        alt='ntu-logo'
                                    />
                                    <div>
                                        <h3 className='qualification__title'>
                                            Nanyang Technological University
                                        </h3>
                                        <span className='qualification__subtitle'>
                                            B.E.Sc. in Comp Sci, M.Sc. in Tech
                                            Mgt
                                        </span>
                                    </div>
                                </div>
                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt' /> Aug
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        {/* RI */}
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <div className='qualification__headline'>
                                    <img
                                        src={require('../assets/ri-logo.jpeg')}
                                        alt='ri-logo'
                                    />
                                    <div>
                                        <h3 className='qualification__title'>
                                            Raffles Institution
                                        </h3>
                                        <span className='qualification__subtitle'>
                                            Singapore-Cambridge GCE A-Level
                                        </span>
                                    </div>
                                </div>

                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt' /> Jan
                                    2014 - Dec 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work */}
                    <div
                        className={`qualification__content ${
                            toggleTab === 2
                                ? 'qualification__content-active'
                                : ''
                        }`}>
                        {/* Proxtera */}
                        <div className='qualification__data'>
                            <div>
                                <div className='qualification__headline'>
                                    <img
                                        src={require('../assets/proxtera-logo.jpeg')}
                                        alt='proxtera-logo'
                                    />
                                    <div>
                                        <h3 className='qualification__title'>
                                            Proxtera
                                        </h3>
                                        <span className='qualification__subtitle'>
                                            Software Engineer Intern
                                        </span>
                                    </div>
                                </div>

                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt' /> May
                                    2023 - Aug 2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        {/* Refers.fyi */}
                        <div className='qualification__data'>
                            <div></div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <div className='qualification__headline'>
                                    <img
                                        src={require('../assets/refersfyi.jpeg')}
                                        alt='refersfyi-logo'
                                    />
                                    <div>
                                        <h3 className='qualification__title'>
                                            Refers.fyi
                                        </h3>
                                        <span className='qualification__subtitle'>
                                            Software Engineer Intern
                                        </span>
                                    </div>
                                </div>

                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt' /> Feb
                                    2023 - Apr 2023
                                </div>
                            </div>
                        </div>

                        {/* Shopee */}
                        <div className='qualification__data'>
                            <div>
                                <div className='qualification__headline'>
                                    <img
                                        src={require('../assets/shopee-logo.jpeg')}
                                        alt='shopee-logo'
                                    />
                                    <div>
                                        <h3 className='qualification__title'>
                                            Shopee
                                        </h3>
                                        <span className='qualification__subtitle'>
                                            Project Intern
                                        </span>
                                    </div>
                                </div>

                                <div className='qualification__calendar'>
                                    <i className='uil uil-calendar-alt' /> Feb
                                    2022 - May 2022
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
