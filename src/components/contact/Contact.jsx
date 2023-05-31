import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const changeNameHandler = e => setName(e.target.value);
    const changeEmailHandler = e => setEmail(e.target.value);
    const changeMessageHandler = e => setMessage(e.target.value);

    // Email.js
    const form = useRef();

    const submitFormHandler = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                'zzh_outlook',
                'personal_website_contact',
                form.current,
                process.env.REACT_APP_EMAILJS_API_KEY
            )
            .then(
                result => {
                    console.log(result.text);
                    setIsEmailSent(true);
                },
                error => {
                    console.log(error.text);
                }
            );

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact</h2>
            <span className='section__subtitle'>
                Here's how you can reach me
            </span>
            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Connect with me</h3>
                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i className='uil uil-envelope-alt contact__card-icon' />
                            <h3 className='contact__card-title'>Email</h3>
                            <span className='contact__card-data'>
                                zhou.ziheng@outlook.com
                            </span>

                            <a
                                href='mailto:zhou.ziheng@outlook.com'
                                className='contact__button'>
                                <i className='uil uil-angle-right contact__button-icon' />
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='uil uil-phone-alt contact__card-icon' />
                            <h3 className='contact__card-title'>Phone</h3>
                            <span className='contact__card-data'>
                                +65 8518 3999
                            </span>

                            <a
                                href='https://wa.me/6585183999'
                                target='_blank'
                                rel='noreferrer'
                                className='contact__button'>
                                <i className='uil uil-angle-right contact__button-icon' />
                            </a>
                        </div>

                        <div className='contact__card'>
                            <i className='uil uil-location-point contact__card-icon' />
                            <h3 className='contact__card-title'>Address</h3>
                            <span className='contact__card-data'>
                                {'62 Nanyang Cres, S(636958)'}
                            </span>

                            <a
                                href='https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme'
                                target='_blank'
                                rel='noreferrer'
                                className='contact__button'>
                                <i className='uil uil-angle-right contact__button-icon' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='contact__content'>
                    <h3 className='contact__title'>Leave a message</h3>

                    <form
                        ref={form}
                        onSubmit={submitFormHandler}
                        className='contact__form'>
                        <div className='contact__form-div'>
                            <label htmlFor='name' className='contact__form-tag'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                className='contact__form-input'
                                required
                                value={name}
                                onChange={changeNameHandler}
                            />
                        </div>

                        <div className='contact__form-div'>
                            <label
                                htmlFor='email'
                                className='contact__form-tag'>
                                Email
                            </label>
                            <input
                                type='text'
                                name='email'
                                id='email'
                                className='contact__form-input'
                                required
                                value={email}
                                onChange={changeEmailHandler}
                            />
                        </div>

                        <div className='contact__form-div contact__form-area'>
                            <label
                                htmlFor='message'
                                className='contact__form-tag'>
                                Message
                            </label>
                            <textarea
                                name='message'
                                id='message'
                                cols='30'
                                rows='10'
                                className='contact__form-input'
                                required
                                value={message}
                                onChange={changeMessageHandler}
                            />
                        </div>

                        <button
                            href='#contact'
                            className='button button--flex contact__form-button'
                            disabled={isEmailSent}>
                            {isEmailSent ? 'Message Sent' : 'Send Message'}
                            {isEmailSent ? (
                                <i className='uil uil-check-circle contact__form-button-icon'></i>
                            ) : (
                                <i className='uil uil-message contact__form-button-icon'></i>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
