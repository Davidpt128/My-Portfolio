import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ProjectsComponent() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My recent projects</span>
      <div className="projects__container container">
        <div>
          <Swiper
            rewind={true}
            spaceBetween={30}
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
            <SwiperSlide>
              <div className="projects__content grid">
                <img src="https://ims.baoyenbai.com.vn/NewsImg/12_2022/256923_19-12-messi.jpg" alt="" className="projects__img" />
                <div className="projects__data">
                  <h3 className="projects__title">Learning Website 1</h3>
                  <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
                  <a href="#" className="projects__button button button--flex button--small">
                    Demo
                    <FiArrowRight className='button__icon' />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects__content grid">
                <img src="https://ims.baoyenbai.com.vn/NewsImg/12_2022/256923_19-12-messi.jpg" alt="" className="projects__img" />
                <div className="projects__data">
                  <h3 className="projects__title">Learning Website 2</h3>
                  <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
                  <a href="#" className="projects__button button button--flex button--small">
                    Demo
                    <FiArrowRight className='button__icon' />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="projects__content grid">
                <img src="https://ims.baoyenbai.com.vn/NewsImg/12_2022/256923_19-12-messi.jpg" alt="" className="projects__img" />
                <div className="projects__data">
                  <h3 className="projects__title">Learning Website 3</h3>
                  <p className="projects__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis!</p>
                  <a href="#" className="projects__button button button--flex button--small">
                    Demo
                    <FiArrowRight className='button__icon' />
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-button-prev">
              <FiChevronLeft className='swiper-projects-icon'/>
            </div>
            <div className="swiper-button-next">
              <FiChevronRight className='swiper-projects-icon'/>
            </div>
          </Swiper>

        </div>
      </div>
    </section>
  )
}
