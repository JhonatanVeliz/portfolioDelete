import Link from "next/link"
import Image from "next/image"
import { FC } from "react";

interface Props {
  pathName : string;
}

const NotFoundInfo: FC<Props> = ({ pathName }) => {
  return (

    <div className="notFound__info">

      <p>
        <span>Error 404 no se pudo acceder a la página</span>
        <br />
        <span>{`" ${pathName} "`}</span>
      </p>

      <Link href="/home" className='notFound__info__return'>
        
        <span>Volver</span>

        <Image
          className='notFound__info__return__img'
          src="/images/return.svg"
          alt="icono de retorno"
          width="30"
          height="30"
        />
        
      </Link>

    </div>
  )
}

export default NotFoundInfo