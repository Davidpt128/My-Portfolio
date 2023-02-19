import React from 'react';
import HomeComponent from '../../components/HomeComponent';
import AboutComponent from '../../components/AboutComponent';
import SkillsComponent from '../../components/SkillsComponent';
import QualificationComponent from '../../components/QualificationComponent';
import ProjectsComponent from '../../components/ProjectsComponent';
import OfferComponent from '../../components/OfferComponent';
import ContactComponent from '../../components/ContactComponent';

export default function HomePage() {
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
