import { useState } from 'react';
import './App.css';

import Stars from './components/stars/Stars';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Contact from './components/contact/Contact';
import Music from './components/music/Music';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleColorModeHandler = isDarkModeToggled => {
        setIsDarkMode(isDarkModeToggled);
    };

    return (
        <>
            <Stars />
            <Header toggleColorModeHandler={toggleColorModeHandler} />
            <main className='main'>
                <Home />
                {/* <About /> */}
                <Skills />
                <Experiences />
                <Contact />
                <Music isDarkMode={isDarkMode} />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
