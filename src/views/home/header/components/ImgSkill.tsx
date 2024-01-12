import Image from "next/image"
import { FC } from "react";

interface Props {
    src : string;
    alt : string;
}

const ImgSkill: FC<Props> = ({ alt, src }) => {
  return (
    <Image className="icon-tech" src={src} alt={alt} width="75" height="75"/>
  )
}

export default ImgSkill