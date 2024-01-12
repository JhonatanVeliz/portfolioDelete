import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

interface Props {
  path : string;
  img : string;
  colaborator : string;
}

const CardColaborators: FC<Props> = ({path, img, colaborator}) => {
  return (
    <Link href={path}>
      <Image
        src={img}
        alt={`colaborador ${colaborator}`}
        width="15"
        height="15"
        title={colaborator}
      />
    </Link>
  )
}

export default CardColaborators