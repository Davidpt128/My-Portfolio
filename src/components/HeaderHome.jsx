import React, { useState } from 'react';
import { BiHome, BiUser, BiBookBookmark, BiFile, BiImage, BiMessageRoundedDots, BiX, BiMenu } from 'react-icons/bi'

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
                                <BiHome className="nav__icon"/> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <BiUser className="nav__icon"/> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <BiBookBookmark className="nav__icon"/> Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <BiFile className="nav__icon"/> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <BiImage className="nav__icon"/> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <BiMessageRoundedDots className="nav__icon"/> Contact
                            </a>
                        </li>
                    </ul>
                    <BiX className="nav__close" id="nav-close" onClick={()=>showMenu(false)}/>
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    {/* <i className="uil uil-moon change-theme" id="theme-button" /> */}
                    <div className="nav__toggle" id="nav-toggle">
                        <BiMenu size="16" onClick={()=>showMenu(true)}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}