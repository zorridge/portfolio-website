import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const menuToggleHandler = () => {
        setIsMenuShown(prevState => !prevState);
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>
                    ZHOU
                </a>
                <div
                    className={
                        isMenuShown ? 'nav__menu show-menu' : 'nav__menu'
                    }>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' className='nav__link active-link'>
                                <i className='uil uil-home nav__icon' />
                                Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' className='nav__link'>
                                <i className='uil uil-user nav__icon' />
                                About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' className='nav__link'>
                                <i className='uil uil-file-alt nav__icon' />
                                Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#portfolio' className='nav__link'>
                                <i className='uil uil-scenery nav__icon' />
                                Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' className='nav__link'>
                                <i className='uil uil-message nav__icon' />
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className='uil uil-times nav__close'
                        onClick={menuToggleHandler}
                    />
                </div>

                <div className='nav__toggle' onClick={menuToggleHandler}>
                    <i className='uil uil-apps' />
                </div>
            </nav>
        </header>
    );
};

export default Header;
