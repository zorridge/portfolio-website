import React from 'react';

const Education = () => {
    return (
        <div className='qualification__content'>
            {/* NTU */}
            <div className='qualification__data'>
                <div>
                    <div className='qualification__headline'>
                        <img
                            src={require('../../assets/ntu-logo.jpeg')}
                            alt='ntu-logo'
                        />
                        <div>
                            <h3 className='qualification__title'>
                                Nanyang Technological University
                            </h3>
                            <span className='qualification__subtitle'>
                                B.E.Sc. in Comp Sci, M.Sc. in Tech Mgt
                            </span>
                        </div>
                    </div>
                    <div className='qualification__calendar'>
                        <i className='uil uil-calendar-alt' /> Aug 2022 -
                        Present
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
                            src={require('../../assets/ri-logo.jpeg')}
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
                        <i className='uil uil-calendar-alt' /> Jan 2014 - Dec
                        2019
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
