import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import ProjectCard from './ProjectCard';

import './projects.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Data } from './Data';

const Projects = () => {
    return (
        <section className='projects section' id='projects'>
            <h2 className='section__title'>Projects</h2>
            <span className='section__subtitle'>Here's what I have built</span>
            <div className='projects__container container'>
                <button className='projects__swiper-prev'>
                    <i className='uil uil-angle-left-b projects__swiper-icon'></i>
                </button>
                <Swiper
                    className='projects__swiper'
                    loop={true}
                    grabCursor={true}
                    spaceBetween={24}
                    pagination={{
                        clickable: true
                    }}
                    navigation={{
                        nextEl: '.projects__swiper-next',
                        prevEl: '.projects__swiper-prev'
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 48
                        }
                    }}
                    modules={[Pagination, Navigation]}>
                    {Data.map(data => {
                        return (
                            <SwiperSlide
                                className='projects__card-wrapper'
                                key={data.id}>
                                <ProjectCard data={data} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <button className='projects__swiper-next'>
                    <i className='uil uil-angle-right-b projects__swiper-icon'></i>
                </button>
            </div>
        </section>
    );
};

export default Projects;
