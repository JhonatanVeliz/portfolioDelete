// REACT
import React from 'react';
import Card from './Card';

// UTILITIES
import { generatorId } from '@/utilities';

// CSS
import '@/assets/css/layout/detailsProjects.css';

const Cards = () => {

  const projects = [
    {
      colaborators : [{path : 'https://github.com/JhonatanVeliz', img : '/images/perfil_github.png', colaborator : 'Jhonatan Véliz', id : generatorId()}],
      img: '/images/proyecto-1.jpg', title: 'Sabor y Sazón', alt: 'proyecto de restaurante',
      text: 'Página web estatica de un restaurante.', path: 'https://jhonatanveliz.github.io/restaurant/index.html', id: generatorId(),
      tecnologies: [
        { img: '/images/html-icon.png', alt: 'html' },
        { img: '/images/css-icon.png', alt: 'css' },
        { img: '/images/js-icon.png', alt: 'javascript' },
      ]
    },
    {
      colaborators : [
        {path : 'https://github.com/JhonatanVeliz', img : '/images/perfil_github.png', colaborator : 'Jhonatan Véliz', id : generatorId()},
        {path : 'https://github.com/kotoykm', img : '/images/perfil-2.png', colaborator : 'Erick Rivera', id : generatorId()}
      ],
      img: '/images/proyecto-2.jpg', title: 'UpConst', alt: 'Proyecto UpConst',
      text: 'Proyecto colaborativo de seguimiento de tareas.', path: 'https://uptask-one.vercel.app/dashboard', id: generatorId(),
      tecnologies: [
        { img: '/images/react-icon.png', alt: 'react' },
        { img: '/images/redux-icon.png', alt: 'redux toolkit' },
        { img: '/images/postgre-icon.png', alt: 'postgre' },
        { img: '/images/ruby-icon.png', alt: 'ruby on rails' },
      ]
    },
    {
      colaborators : [
        {path : 'https://github.com/JhonatanVeliz', img : '/images/perfil_github.png', colaborator : 'Jhonatan Véliz', id : generatorId()},
      ],
      img: '/images/proyecto-8.jpg', title: 'App Clima', alt: 'Proyecto Clima',
      text: 'Proyecto colaborativo de seguimiento de tareas.', path: 'https://jhonatanveliz.github.io/app-clima', id: generatorId(),
      tecnologies: [
        { img: '/images/html-icon.png', alt: 'html' },
        { img: '/images/css-icon.png', alt: 'css' },
        { img: '/images/js-icon.png', alt: 'javascript' },
      ]
    },
  ];

  return (
    <div className="projects">
      {
        projects.map( (card, index) => (
          <Card 
            key={index * 4}
            img={card.img}
            alt={card.alt}
            title={card.title}
            text={card.text}
            path={card.path}
            tecnologies={card.tecnologies}
            colaborators={card.colaborators}
          />
        ))
      }
    </div>
  )
}

export default Cards