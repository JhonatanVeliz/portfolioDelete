// NEXT COMPONENTS
import LinkImg from './LinkImg';
// CUSTOM COMPONENTS
import FooterCopy from './FooterCopy';

const FooterLinks = () => {

  const socialLinks = [
    { 
      path : 'https://github.com/JhonatanVeliz', 
      imgAvatar : '/images/github.png', 
      altImgAvatar : 'icono github',
      imgSocial : '/images/perfil_github.png',
      altImgSocial : 'perfil de github',
      userNameSocial : 'JhonatanVeliz'
    },
    { 
      path : 'https://api.whatsapp.com/send?phone=50670910', 
      imgAvatar : '/images/whatsApp.png', 
      altImgAvatar : 'icono github',
      imgSocial : '/images/perfil_whatsApp.png',
      altImgSocial : 'perfil de github',
      userNameSocial : '+502 5067 0910'
    },
    { 
      path : 'https://www.instagram.com/jhonatanveliz19', 
      imgAvatar : '/images/instagram.png', 
      altImgAvatar : 'icono github',
      imgSocial : '/images/perfil_instagram.png',
      altImgSocial : 'perfil de github',
      userNameSocial : 'jhonatanveliz19'
    }
  ];

  return (
    <div className='footer__content'>

      <div className="footer__content__links">
        {
          socialLinks?.map((redSocial, index) => (
            <LinkImg
              key={index * 2}
              path={redSocial.path}
              imgAvatar={redSocial.imgAvatar}
              altImgAvatar={redSocial.altImgAvatar}
              imgSocial={redSocial.imgSocial}
              altImgSocial={redSocial.altImgSocial}
              userNameSocial={redSocial.userNameSocial} />
          ))
        }
      </div>

      <FooterCopy />
    </div>
  )
}

export default FooterLinks