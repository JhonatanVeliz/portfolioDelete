import { stateDarkMode } from "@/store";
import Image from "next/image"
import { FC } from "react";

interface Props {
  img : string;
  title : string;
  paragraph : string;
  changeViewCertificate : (file:string) => void;
  file : string
}

const Card: FC<Props> = ({ img, title, paragraph, changeViewCertificate, file }) => {

  const { isDarkMode } = stateDarkMode();

  const setCertificate = (e:any) => {
    const file = e.target.getAttribute('data-certificate');
    changeViewCertificate(file);
  }

  return (
    <article className={`certificates__card ${isDarkMode ? 'certificates__card--dark' : ''}`}>

      <Image
        src={img}
        alt={title}
        width="600"
        height="600"
      />

      <h3 className="certificates__card__title">{title}</h3>

      <p className="certificates__card__paragraph">{paragraph}</p>

      <button 
        className="certificates__card__link"
        data-certificate={file}
        onClick={setCertificate}
        >
        Visualizar
      </button>

    </article>
  )
}

export default Card