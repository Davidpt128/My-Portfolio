import React, { useState } from 'react'

export default function HeaderHome(props) {
    const [menu, setMenu] = useState(false);

    const showMenu = (isShow) => {
        setMenu(isShow);
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">David</a>
                <div className={menu ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" onClick={()=>showMenu(false)}/>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    <i className="uil uil-moon change-theme" id="theme-button" />
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps" onClick={()=>showMenu(true)}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
