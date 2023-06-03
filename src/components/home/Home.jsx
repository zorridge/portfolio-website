import React from 'react';
import { motion } from 'framer-motion';

import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className='home section' id='home'>
            <div className='home__container container grid'>
                <div className='home__content grid'>
                    <Social />
                    <motion.div
                        initial={{ opacity: 0, y: 75 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className='home__img'></motion.div>
                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;
