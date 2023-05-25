import React from 'react';
import './music.css';

const Music = ({ isDarkMode }) => {
    return (
        <section className='section music' id='#music'>
            <h2 className='section__title'>Just For Fun</h2>
            <span className='section__subtitle'>
                ...and here's what I have been listening to
            </span>
            <div className='music__container container'>
                <img
                    src={
                        isDarkMode
                            ? 'https://github-profile-spotify-widget.vercel.app/api/spotify?background_color=212121&title_background_color=009875'
                            : 'https://github-profile-spotify-widget.vercel.app/api/spotify?background_color=000000DE&title_background_color=007b5a'
                    }
                    alt='spotify-widget'
                />
            </div>
        </section>
    );
};

export default Music;
