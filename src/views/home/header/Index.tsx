'use client';

// ANIMATE CSS
import 'animate.css/animate.min.css';
// Components
import BtnDarkMode from './components/BtnDarkMode';
// CSS
import '@/assets/css/layout/header.css';
// IMG
import ImgSkill from './components/ImgSkill';

export default function Header() {

  const skiils = [
    { src : '/images/figma.png', alt : 'Imagen de figma' },
    { src : '/images/html.png', alt : 'Imagen de HTML' },
    { src : '/images/css.png', alt : 'Imagen de CSS' },
    { src : '/images/tailwind.png', alt : 'Imagen de Tailwind CSS' },
    { src : '/images/js.png', alt : 'Imagen de Javascript' },
    { src : '/images/react.png', alt : 'Imagen de React JS' },
    { src : '/images/php.png', alt : 'Imagen de PHP' },
    { src : '/images/laravel.png', alt : 'Imagen de Laravel' },
    { src : '/images/mysql.png', alt : 'Imagen de MySQL' },
    { src : '/images/jest.png', alt : 'Imagen de JEST' },
    { src : '/images/git.png', alt : 'Imagen de GIT' },
  ];

  return (
    <header className="header text-center">

      <div className="grid-layout header__principal">

        <nav className='w-full flex justify-end'>
          <BtnDarkMode />
        </nav>

        <div className="header__content">

          <span className='text-gray-200 animate__backInDown'>
            Creando Proyectos Con:
          </span>

          <div className="header__content__skills">
            {
              skiils.map( ({ src, alt }, index) => <ImgSkill key={index} src={src} alt={alt} />)
            }
          </div>

        </div>

      </div>

    </header>
  )
}