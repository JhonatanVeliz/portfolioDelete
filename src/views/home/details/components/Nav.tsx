'use client';
// REACT
import { FC, useState } from "react";
// COMPONENTS
import Projects from "./projects/Cards";

// CSS
import '@/assets/css/layout/detailsNav.css';

interface Props {
  view : string;
  changeView : ( event:any ) => void
}

const Nav: FC<Props> = ({ view , changeView }) => {

  return (
    <nav className="nav">

      <button
        className={`nav__link ${view === 'projects' ? 'nav__link--active' : ''}`}
        data-view="projects"
        onClick={changeView}
      >
        Proyectos
      </button>

      <button
        className={`nav__link ${view === 'certifys' ? 'nav__link--active' : ''}`}
        data-view="certificates"
        onClick={changeView}
      >
        Certificaciones
      </button>

      <button
        className={`nav__link ${view === 'skills' ? 'nav__link--active' : ''}`}
        data-view="skills"
        onClick={changeView}
      >
        Habilidades
      </button>

    </nav>
  )
}

export default Nav