'use client';
import Image from "next/image";

const ImgPerfil = () => {

  const isDark = false;

  return (
    <div className="about__perfil">
      <div className={`about__perfil__marco ${isDark ? 'about__perfil__marco--isDark' : ''}`}>

        <div className="about__perfil__marco__content">
          <Image
            src="/images/perfil.png"
            alt="imagen de perfil"
            width="100"
            height="100"
          />
        </div>

      </div>
    </div>
  )
}

export default ImgPerfil