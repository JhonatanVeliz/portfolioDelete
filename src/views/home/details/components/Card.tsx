'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CardCredits from './CardCredits';
import CardTecnologies from './CardTecnologies';
import { stateDarkMode } from '@/store';

interface Props {
  img: string;
  title: string;
  alt: string;
  colaborators : any[];
  text: string;
  path: string;
  tecnologies: any[];
}

const Card: FC<Props> = ({ img, title, alt, colaborators, text, path, tecnologies }) => {

  const { isDarkMode } = stateDarkMode();

  return (
    <Link href={path} target="_blank" className={`projects__card ${isDarkMode ? 'projects__card--dark' : ''}`}>

      <Image 
        src={img}
        alt={alt}
        width="600"
        height="600"
        className="projects__card__img"
      />

      <div className="projects__card__info">

        <CardCredits colaborators={colaborators} />

        <h2 className="projects__card__title">{title}</h2>
        <p className="projects__card__paragraph">{text}</p>

        <CardTecnologies tecnologies={tecnologies} />

      </div>

    </Link>
  )
}

export default Card