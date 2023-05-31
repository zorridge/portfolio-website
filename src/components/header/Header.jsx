import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import './header.css';

const Header = ({ toggleColorModeHandler: parentToggleDarkMode }) => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [selectTab, setSelectTab] = useState(1);
    const [isDarkMode, setDarkMode] = useState(null);
    const root = document.documentElement;

    const menuToggleHandler = () => {
        setIsMenuShown(prevState => !prevState);
    };

    const selectTabHandler = tab => {
        setSelectTab(tab);
        if (isMenuShown) setIsMenuShown(false);
    };

    const toggleDarkMode = checked => {
        setDarkMode(checked);
        parentToggleDarkMode(checked);
    };

    // Restore dark mode preference from local storage on initial render
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
            setDarkMode(JSON.parse(storedDarkMode));
        }
    }, []);

    // Toggle dark mode
    useEffect(() => {
        if (isDarkMode) {
            root.classList.add('dark-mode');
        } else {
            root.classList.remove('dark-mode');
        }

        // Save dark mode preference to local storage
        if (isDarkMode !== null) {
            localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        }
    }, [root, isDarkMode]);

    // Match navlink with scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY + 100; // Offset value

            // Find the current section based on the scroll position
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const sectionTop = section.offsetTop;

                if (scrollPosition >= sectionTop) {
                    setSelectTab(i + 1);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>
                    Z&#178;
                </a>
                <div
                    className={
                        isMenuShown ? 'nav__menu show-menu' : 'nav__menu'
                    }>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a
                                href='#home'
                                className={`nav__link ${
                                    selectTab === 1 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(1)}>
                                <i className='uil uil-home nav__icon' />
                                Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#about'
                                className={`nav__link ${
                                    selectTab === 2 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(2)}>
                                <i className='uil uil-user nav__icon' />
                                About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#skills'
                                className={`nav__link ${
                                    selectTab === 3 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(3)}>
                                <i className='uil uil-lightbulb-alt nav__icon' />
                                Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#experiences'
                                className={`nav__link ${
                                    selectTab === 4 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(4)}>
                                <i className='uil uil-briefcase-alt nav__icon' />
                                Experiences
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#projects'
                                className={`nav__link ${
                                    selectTab === 5 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(5)}>
                                <i className='uil uil-flask nav__icon' />
                                Projects
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a
                                href='#contact'
                                className={`nav__link ${
                                    selectTab === 6 ? 'active-link' : ''
                                }`}
                                onClick={() => selectTabHandler(6)}>
                                <i className='uil uil-message nav__icon' />
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* <i
                        className='uil uil-times nav__close'
                        onClick={menuToggleHandler}
                    /> */}
                </div>
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={24}
                    sunColor={'#000000de'}
                    moonColor={'#ffffffde'}
                />
                <div className='nav__toggle' onClick={menuToggleHandler}>
                    <i className='uil uil-apps' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
