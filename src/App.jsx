import './App.css';

import Stars from './components/stars/Stars';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experiences from './experiences/Experiences';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <Stars />
            <Header />
            <main className='main'>
                <Home />
                <Skills />
                <Experiences />
                <Footer />
            </main>
        </>
    );
}

export default App;
