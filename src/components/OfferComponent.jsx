import React from 'react'
import { BiCommentDetail } from 'react-icons/bi';
import ImgOffer from '../assets/img/imgNoBackground.png'

export default function OfferComponent() {
  return (
    <section className="offer section">
      <div className="offer__bg">
        <div className="offer__container container grid">
            <div className="offer__data">
                <h2 className="offer__title">You have a new project</h2>
                <p className="offer__description">Contact me now</p>
                <a href="#contact" className="button button--flex button--white">
                    Contact Me
                    <BiCommentDetail className="offer__icon button__icon" />
                </a>
            </div>
            <img src={ImgOffer} alt="" className="offer__img" />
        </div>
      </div>
    </section>
  )
}
