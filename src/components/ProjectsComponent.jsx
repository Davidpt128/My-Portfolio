import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Img1 from '../assets/img/img.jpeg'
import Img2 from '../assets/img/img2.jpg'
import Img3 from '../assets/img/img3.jpg'


export default function ProjectsComponent() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My recent projects</span>
      <div className="projects__container container">
        <Swiper
          rewind={true}
          spaceBetween={50}
          centeredSlides={true}
          // mousewheel={true}
          // keyboard={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide className="projects__content grid">
            <img src={Img3} alt="" className="projects__img" />
            <div className="projects__data">
              <h3 className="projects__title">Website 1</h3>
              <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
              <a href="#" className="projects__button button button--flex button--small">
                Demo
                <FiArrowRight className='button__icon' />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects__content grid">
            <img src={Img3} alt="" className="projects__img" />
            <div className="projects__data">
              <h3 className="projects__title">Website 2</h3>
              <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
              <a href="#" className="projects__button button button--flex button--small">
                Demo
                <FiArrowRight className='button__icon' />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects__content grid">
            <img src={Img3} alt="" className="projects__img" />
            <div className="projects__data">
              <h3 className="projects__title">Website 3</h3>
              <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
              <a href="#" className="projects__button button button--flex button--small">
                Demo
                <FiArrowRight className='button__icon' />
              </a>
            </div>
          </SwiperSlide>
          <FiChevronLeft className='swiper-projects-icon swiper-button-prev' />
          <FiChevronRight className='swiper-projects-icon swiper-button-next' />
        </Swiper>
      </div>
    </section>
  )
}
