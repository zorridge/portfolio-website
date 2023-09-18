import React, { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';

import { storage } from '../../utils/firebase';

const Social = () => {
    const storageRef = ref(storage, 'documents/resume_ZhouZiheng.pdf');
    const [resumeUrl, setResumeUrl] = useState('');

    useEffect(() => {
        getDownloadURL(storageRef)
            .then(url => setResumeUrl(url))
            .catch(e => {
                console.log(
                    `Error fetching resume from Firebase:\n${e.message}`
                );
            });
    }, [storageRef]);

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
                href={resumeUrl}
                className='home__social-icon'
                target='_blank'
                rel='noreferrer'>
                <i className='uil uil-file-download' />
            </a>
        </div>
    );
};

export default Social;
