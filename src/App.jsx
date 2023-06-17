import { useState, useEffect } from 'react';
import './App.css';

import Reveal from './utils/Reveal';

// import Stars from './components/stars/Stars';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Music from './components/music/Music';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleColorModeHandler = isDarkModeToggled => {
        setIsDarkMode(isDarkModeToggled);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <Stars /> */}
            <Header toggleColorModeHandler={toggleColorModeHandler} />
            <main className='main'>
                <Reveal>
                    <Home />
                </Reveal>
                <Reveal>
                    <About />
                </Reveal>
                <Reveal>
                    <Skills />
                </Reveal>
                <Reveal>
                    <Experiences />
                </Reveal>
                <Reveal>
                    <Projects />
                </Reveal>
                <Reveal>
                    <Contact />
                </Reveal>
                <Reveal>
                    <Music isDarkMode={isDarkMode} />
                </Reveal>
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
