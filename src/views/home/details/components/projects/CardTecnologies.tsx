// REACT
import { FC } from "react";
// NEXT
import Image from "next/image"
// UTILITIES
import { generatorId } from "@/utilities";

interface Props {
  tecnologies : any[];
}

const CardTecnologies: FC<Props> = ({ tecnologies }) => {
  return (
    <div className="projects__card__tecnologies">
      {
        tecnologies?.map((tecnologie) => (
          <Image
            key={generatorId()}
            src={tecnologie.img}
            alt={tecnologie.alt}
            width="100"
            height="100"
            className="projects__card__tecnologies__img"
            title={tecnologie.alt}
          />
        ))
      }
    </div>
  )
}

export default CardTecnologies