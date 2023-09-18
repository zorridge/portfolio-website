import React from 'react';

const Work = () => {
    return (
        <div className='qualification__content'>
            {/* NodeFlair */}
            <div className='qualification__data'>
                <div>
                    <div className='qualification__headline'>
                        <img
                            src={require('../../assets/nodeflair-logo.jpeg')}
                            alt='nodeflair-logo'
                        />
                        <div>
                            <h3 className='qualification__title'>NodeFlair</h3>
                            <span className='qualification__subtitle'>
                                Software Engineer Intern
                            </span>
                        </div>
                    </div>

                    <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt' /> Dec 2023 - May
                        2024
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>

            {/* Proxtera */}
            <div className='qualification__data'>
                <div></div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
                <div>
                    <div className='qualification__headline'>
                        <img
                            src={require('../../assets/proxtera-logo.jpeg')}
                            alt='proxtera-logo'
                        />
                        <div>
                            <h3 className='qualification__title'>Proxtera</h3>
                            <span className='qualification__subtitle'>
                                Software Engineer Intern
                            </span>
                        </div>
                    </div>

                    <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt' /> May 2023 - Jul
                        2023
                    </div>
                </div>
            </div>

            {/* Refers.fyi */}
            <div className='qualification__data'>
                <div>
                    <div className='qualification__headline'>
                        <img
                            src={require('../../assets/refersfyi.jpeg')}
                            alt='refersfyi-logo'
                        />
                        <div>
                            <h3 className='qualification__title'>Refers.fyi</h3>
                            <span className='qualification__subtitle'>
                                Software Engineer Intern
                            </span>
                        </div>
                    </div>

                    <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt' /> Feb 2023 - Apr
                        2023
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>

            {/* Shopee */}
            <div className='qualification__data'>
                <div></div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
                <div>
                    <div className='qualification__headline'>
                        <img
                            src={require('../../assets/shopee-logo.jpeg')}
                            alt='shopee-logo'
                        />
                        <div>
                            <h3 className='qualification__title'>Shopee</h3>
                            <span className='qualification__subtitle'>
                                Project Intern
                            </span>
                        </div>
                    </div>

                    <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt' /> Feb 2022 - May
                        2022
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
