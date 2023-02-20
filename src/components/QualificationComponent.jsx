import React, { useState } from 'react';
import { SlGraduation } from 'react-icons/sl';
import { BiBriefcaseAlt2, BiCalendar } from 'react-icons/bi';

export default function QualificationComponent() {
    const [activeQualification, setActiveQualification] = useState(0);

    const handleQualificationClick = (index) => {
        setActiveQualification(index);
      };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={activeQualification === 0 ? "qualification__button button--flex qualification__button-active" : "qualification__button button--flex"} onClick={()=>handleQualificationClick(0)}>
                        <SlGraduation className='qualification__icon' />
                        Education
                    </div>
                    <div className={activeQualification === 1 ? "qualification__button button--flex qualification__button-active" : "qualification__button button--flex"} onClick={()=>handleQualificationClick(1)}>
                        <BiBriefcaseAlt2 className='qualification__icon' />
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    {/* Education */}
                    <div className={activeQualification === 0 ? "qualification__content qualification__active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Law</h3>
                                <span className="qualification__subtitle">University of Law</span>
                                <div className="qualification__calendar">
                                    <BiCalendar />
                                    2016-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Business Administration</h3>
                                <span className="qualification__subtitle">University of Law</span>
                                <div className="qualification__calendar">
                                    <BiCalendar />
                                    2016-2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Cybersoft Academy</span>
                                <div className="qualification__calendar">
                                    <BiCalendar />
                                    09/2021-04/2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                        </div>
                    </div>
                    {/* Work */}
                    <div className={activeQualification === 1 ? "qualification__content qualification__active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern Frontend Developer</h3>
                                <span className="qualification__subtitle">Cybersoft Academy</span>
                                <div className="qualification__calendar">
                                    <BiCalendar />
                                    04/2022-07/2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                {/* <span className="qualification__line"></span> */}
                            </div>
                            <div>
                                <h3 className="qualification__title">Fullstack Developer</h3>
                                <span className="qualification__subtitle">I3 Australia Technology Solutions</span>
                                <div className="qualification__calendar">
                                    <BiCalendar />
                                    08/2022-01/2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
