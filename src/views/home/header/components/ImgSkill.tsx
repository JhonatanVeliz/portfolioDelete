import Image from "next/image"
import Link from "next/link";
import { FC } from "react";

interface Props {
    src : string;
    alt : string;
}

const ImgSkill: FC<Props> = ({ alt, src }) => {
  return (
    <Link href="#details">

      <Image 
        className="icon-tech" 
        src={src} 
        alt={alt} 
        width="75" 
        height="75"
      />

    </Link>
  )
}

export default ImgSkill