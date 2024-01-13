import React, { FC } from 'react'

// COMPONENTS
import CardColaborators from './CardColaborators';
import { stateDarkMode } from '@/store';

interface Props {
  colaborators : any[];
}

const CardCredits: FC<Props> = ({ colaborators }) => {

  const { isDarkMode } = stateDarkMode();

  return (
    <div className={`projects__card__credits ${isDarkMode ? 'projects__card__credits--dark' : ''}`}>

      <span>
        Creado por:
      </span>

      <span className="projects__card__credits__img">

        {
          colaborators?.map((colaborator) => (
            <CardColaborators
              key={colaborator.id}
              path={colaborator.path}
              colaborator={colaborator.colaborator}
              img={colaborator.img}
            />
          ))
        }

      </span>

    </div>
  )
}

export default CardCredits