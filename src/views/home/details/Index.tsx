'use client';
// REACT
import { useState } from 'react';

// COMPONENTS
import Nav from './components/Nav';
import Projects from './components/projects/Cards';
import Certificates from './components/cartificates/Cards';
import Skills from './components/skills/Skills';

// CSS
import '@/assets/css/layout/details.css';

// TYPESCRIPT TYPES
interface PathsType {
  projects : string;
  certificates : string;
  skills  : string;
}

const Details = () => {
  
  const [ view, setView ] = useState('projects');

  const paths:PathsType  = {
    projects : 'projects',
    certificates : 'certifys',
    skills : 'skills',
  }

  const changeView = (e: any) => {
    const dataView :string = e.target.getAttribute('data-view');
    if(paths[dataView]) setView(paths[dataView]);
  }

  return (
    <div className="grid-layout section-layout" id="details">
      <Nav view={view} changeView={changeView}/>

      <article className="details-container">

        { view === paths.projects ? <Projects />  : null }

        { view === paths.certificates ? <Certificates />  : null }

        { view === paths.skills ? <Skills />  : null }

      </article>

    </div>
  )
}

export default Details