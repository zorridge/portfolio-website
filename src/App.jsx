import './App.css';

import Stars from './components/stars/Stars';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <Stars />
            <Header />
            <main className='main'>
                <Home />
                <Skills />
                <Experiences />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
