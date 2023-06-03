import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './experiences.css';

import Work from './Work';
import Education from './Education';

const Experiences = () => {
    const [toggleTab, setToggleTab] = useState(2);

    const toggleTabHandler = tab => {
        setToggleTab(tab);
    };

    return (
        <section className='qualification section' id='experiences'>
            <h2 className='section__title'>Experiences</h2>
            <span className='section__subtitle'>
                Here's where I have been to
            </span>
            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    {/* Education Button */}
                    <div
                        className={`qualification__button button--flex ${
                            toggleTab === 1 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTabHandler(1)}>
                        <i className='uil uil-graduation-cap qualification__icon' />
                        Education
                    </div>

                    {/* Work Button */}
                    <div
                        className={`qualification__button button--flex ${
                            toggleTab === 2 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTabHandler(2)}>
                        <i className='uil uil-hard-hat qualification__icon' />
                        Work
                    </div>
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={toggleTab}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='qualification__sections'>
                        {toggleTab === 2 ? <Work /> : <Education />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Experiences;
