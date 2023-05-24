import React from 'react';

const ProjectCard = props => {
    const { tags, image, title, description, live, source } = props.data;

    const tagsPill = tags.map(tag => {
        return (
            <>
                <span key={tag} className='projects__tag'>
                    {tag}
                </span>
                &nbsp;
            </>
        );
    });

    return (
        <div className='projects__card'>
            <img src={image} alt='project' className='projects__img' />
            <h3 className='projects__name'>{title}</h3>
            <p className='projects__description'>{description}</p>
            <div className='projects__tags-container'>{tagsPill}</div>
            <div className='projects__button-container'>
                <a
                    href={live}
                    className='button button--flex projects__button'
                    target='_blank'
                    rel='noreferrer'>
                    <i class='uil uil-external-link-alt projects__icon' />
                    <span className='projects__button-text'>Live</span>
                </a>
                <a
                    href={source}
                    className='button button--flex projects__button'
                    target='_blank'
                    rel='noreferrer'>
                    <i class='uil uil-brackets-curly projects__icon' />
                    <span className='projects__button-text'>Repo</span>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
