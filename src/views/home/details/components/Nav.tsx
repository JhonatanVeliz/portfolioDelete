'use client';
// REACT
import { useState } from "react";

// CSS
import '@/assets/css/layout/detailsNav.css';

interface PathsType {
  projects : string;
  certifys : string;
  skills  : string;
}

const Nav = () => {

  const [ view, setView ] = useState('projects');

  const paths:PathsType  = {
    projects : 'projects',
    certifys : 'certifys',
    skills : 'skills',
  }

  const changeView = (e: any) => {
    const dataView :string = e.target.getAttribute('data-view');

    if(paths[dataView]) setView(paths[dataView]);
  }

  return (
    <nav className="nav">

      <button 
        className={`nav__link ${ view === 'projects' ? 'nav__link--active' : ''}`}
        data-view="projects"
        onClick={changeView}
      >
        Proyectos
      </button>

      <button 
        className={`nav__link ${ view === 'certifys' ? 'nav__link--active' : ''}`}
        data-view="certifys"
        onClick={changeView}
      >
        Certificaciones
      </button>

      <button 
        className={`nav__link ${ view === 'skills' ? 'nav__link--active' : ''}`}
        data-view="skills"
        onClick={changeView}
      >
        Habilidades
      </button>

    </nav>
  )
}

export default Nav