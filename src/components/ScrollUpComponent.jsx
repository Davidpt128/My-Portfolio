import React from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'

export default function ScrollUpComponent() {
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up')
        if(this.scrollY >= 560){
            scrollUp.classList.add('show-scroll')
        }
        else{
            scrollUp.classList.remove('show-scroll')
        }
    }
    window.addEventListener('scroll', scrollUp)

    return (
        <a href="#" className='scrollup' id='scroll-up'>
            <BiUpArrowAlt className='scrollup__icon' />
        </a>
    )
}
