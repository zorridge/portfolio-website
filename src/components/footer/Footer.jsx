import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
            <div className='footer__container container'>
                {/* <h1 className='footer__title'>ZHOU ZIHENG</h1> */}
                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#skills' className='footer__link'>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href='#experiences' className='footer__link'>
                            Experiences
                        </a>
                    </li>
                    <li>
                        <a href='#projects' className='footer__link'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact' className='footer__link'>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className='footer__info'>
                    <div className='footer__social'>
                        <a
                            href='https://www.linkedin.com/in/zhou-ziheng/'
                            className='footer__social-link'
                            target='_blank'
                            rel='noreferrer'>
                            <i className='uil uil-linkedin' />
                            &nbsp;LinkedIn
                        </a>
                        <a
                            href='https://github.com/zorridge'
                            className='footer__social-link'
                            target='_blank'
                            rel='noreferrer'>
                            <i className='uil uil-github' />
                            &nbsp;Github
                        </a>
                    </div>
                    <span className='footer__copy'>
                        Made with <i className='uil uil-heart' /> by Zhou Ziheng
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
