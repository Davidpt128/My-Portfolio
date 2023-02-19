import React from 'react'
import { BiPhone, BiEnvelope, BiMap, BiMailSend } from 'react-icons/bi'

export default function ContactComponent() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get a touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <BiPhone className='contact__icon' />
                        <div>
                            <h3 className="contac__title">Call Me</h3>
                            <span className="contact__subtitle">+84346281313</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <BiEnvelope className='contact__icon' />
                        <div>
                            <h3 className="contac__title">Email</h3>
                            <span className="contact__subtitle">thanhdat.12081998@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <BiMap className='contact__icon' />
                        <div>
                            <h3 className="contac__title">Location</h3>
                            <span className="contact__subtitle">Ho Chi Minh City - Vietnam</span>
                        </div>
                    </div>
                </div>
                <form action="" className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Name</label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label htmlFor="" className="contact__label">Email</label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Project</label>
                        <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Message</label>
                        <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                    </div>
                    <div>
                        <a href="#" className="button button--flex">
                            Send Message
                            <BiMailSend className='button__icon'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    )
}
