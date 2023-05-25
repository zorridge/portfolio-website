import React from 'react';
import Resume from '../../assets/resume_ZhouZiheng.pdf';

const Social = () => {
    return (
        <div className='home__social'>
            <a
                href='https://www.linkedin.com/in/zhou-ziheng/'
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'>
                <i className='uil uil-linkedin-alt' />
            </a>
            <a
                href='https://github.com/zorridge'
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'>
                <i className='uil uil-github-alt' />
            </a>
            <a
                href={Resume}
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'>
                <i className='uil uil-file-download' />
            </a>
        </div>
    );
};

export default Social;
