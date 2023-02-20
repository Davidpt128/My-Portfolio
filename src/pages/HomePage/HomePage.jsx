import React from 'react';
import HomeComponent from '../../components/HomeComponent';
import AboutComponent from '../../components/AboutComponent';
import SkillsComponent from '../../components/SkillsComponent';
import QualificationComponent from '../../components/QualificationComponent';
import ProjectsComponent from '../../components/ProjectsComponent';
import OfferComponent from '../../components/OfferComponent';
import ContactComponent from '../../components/ContactComponent';

export default function HomePage() {
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//   const scrollY = window.pageYOffset

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50
//     let sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//     }
//     else{
//       document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//   })
// }

// window.addEventListener('scroll', scrollActive)
  return (
    <main className="main">
      <HomeComponent/>
      <AboutComponent/>
      <QualificationComponent/>
      <SkillsComponent/>
      <ProjectsComponent/>
      <OfferComponent/>
      <ContactComponent/>
    </main>
  )
}
