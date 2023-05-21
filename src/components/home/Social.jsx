import React from 'react';

const Social = () => {
    return (
        <div className='home__social'>
            <a
                href='https://www.linkedin.com/in/zhou-ziheng/'
                className='home__social-icon'
                target='_blank'>
                <i className='uil uil-linkedin-alt' />
            </a>
            <a
                href='https://github.com/zorridge'
                className='home__social-icon'
                target='_blank'>
                <i className='uil uil-github-alt' />
            </a>
            <a
                href='https://www.google.com'
                className='home__social-icon'
                target='_blank'>
                <i className='uil uil-file-download' />
            </a>
        </div>
    );
};

export default Social;
