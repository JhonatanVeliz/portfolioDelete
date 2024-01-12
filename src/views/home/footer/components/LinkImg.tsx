import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  path : string;
  imgAvatar : string;
  altImgAvatar : string;
  imgSocial : string;
  altImgSocial : string;
  userNameSocial : string;
}

const LinkImg: FC<Props> = ({ path, imgAvatar, altImgAvatar, imgSocial, altImgSocial, userNameSocial }) => {
  return (
    <Link href={path} className="footer__link" target="_blank">

      <div className="footer__link__img-content">
        <Image
          src={imgAvatar}
          alt={altImgAvatar}
          width="45"
          height="45"
        />
      </div>

      <div className="footer__link__info">

        <Image
          src={imgSocial}
          alt={altImgSocial}
          width="25"
          height="25"
        />

        <span>
          { userNameSocial }
        </span>

      </div>


    </Link>
  )
}

export default LinkImg