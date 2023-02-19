import React, { useState } from 'react';
import { BiCodeCurly, BiChevronDown } from 'react-icons/bi';
import { SiCsharp } from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNetmagazine, DiMsqlServer } from 'react-icons/di';

export default function SkillsComponent() {
    const [activeSkill, setActiveSkill] = useState(0);

    const handleSkillClick = (index) => {
        if (activeSkill === index) {
            setActiveSkill(null);
        } else {
            setActiveSkill(index);
        }
    };

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical skills</span>
            <div className="skills__container container grid">
                <div>
                    <div className={activeSkill === 0 ? "skills__content skills__open" : "skills__content skills__close"}>
                        <div className="skills__header" onClick={() => handleSkillClick(0)}>
                            <BiCodeCurly className="skills__icon" />
                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills__subtitle">More than 1 year</span>
                            </div>
                            <BiChevronDown className="skills__arrow" />
                        </div>
                        <div className="skills__list gird">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <DiHtml5 className="skills__icon" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <DiCss3 className="skills__icon" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Javascript</h3>
                                    <DiJavascript1 className="skills__icon" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <DiReact className="skills__icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={activeSkill === 1 ? "skills__content skills__open" : "skills__content skills__close"}>
                        <div className="skills__header" onClick={() => handleSkillClick(1)}>
                            <FaNetworkWired className="skills__icon" />
                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className="skills__subtitle">More than 5 months</span>
                            </div>
                            <BiChevronDown className="skills__arrow" />
                        </div>
                        <div className="skills__list gird">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">C#</h3>
                                    <SiCsharp className="skills__icon" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">.Net</h3>
                                    <DiNetmagazine className="skills__icon" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">SQL Server</h3>
                                    <DiMsqlServer className="skills__icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
