import React from 'react';
import { FiDownload } from 'react-icons/fi';
import ImgAbout from '../assets/img/img3.jpg';
// import Cv from '../assets/pdf/CV_PhamThanhDat.pdf'

export default function AboutComponent() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={ImgAbout} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam quis nisi eos distinctio reiciendis fuga placeat omnis illum? Temporibus fuga facilis sint. Animi?</p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">01</span>
                            <span className="about__info-name">Year <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">05+</span>
                            <span className="about__info-name">Completed <br /> projects</span>
                        </div>
                        <div>
                            <span className="about__info-title">02</span>
                            <span className="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href='#' className="button button--flex">
                            Download CV <FiDownload className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
