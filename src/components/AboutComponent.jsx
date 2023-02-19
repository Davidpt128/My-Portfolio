import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function AboutComponent() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src="https://ims.baoyenbai.com.vn/NewsImg/12_2022/256923_19-12-messi.jpg" alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam quis nisi eos distinctio reiciendis fuga placeat omnis illum? Temporibus fuga facilis sint. Animi?</p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">06+</span>
                            <span className="about__info-name">Months <br /> experience</span>
                        </div>
                        <div>
                            <span className="about__info-title">07+</span>
                            <span className="about__info-name">Completed <br /> projects</span>
                        </div>
                        <div>
                            <span className="about__info-title">02</span>
                            <span className="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a download="" href="../../assets/pdf/CV_PhamThanhDat.pdf" className="button button--flex">
                            Download CV <FiDownload className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
