import React from 'react';

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
                <i className='uil uil-laptop about__icon'></i>
                <h3 className='about__title'>3</h3>
                <span className='about__subtitle'>Years Coding</span>
            </div>

            <div className='about__box'>
                <i className='uil uil-flask about__icon'></i>
                <h3 className='about__title'>10+</h3>
                <span className='about__subtitle'>Projects Built</span>
            </div>
            <div className='about__box'>
                <i className='uil uil-briefcase-alt about__icon'></i>
                <h3 className='about__title'>3</h3>
                <span className='about__subtitle'>Tech Internships</span>
            </div>
        </div>
    );
};

export default Info;
