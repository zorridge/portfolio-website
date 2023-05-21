import './App.css';

import Stars from './components/stars/Stars';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
    return (
        <>
            <Stars />
            <Header />
            <main className='main'>
                <Home />
            </main>
        </>
    );
}

export default App;
