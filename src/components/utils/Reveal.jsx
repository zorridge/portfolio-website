import React from 'react';

import { motion } from 'framer-motion';

const Reveal = ({ children }) => {
    const variants = {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={variants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            {children}
        </motion.div>
    );
};

export default Reveal;
