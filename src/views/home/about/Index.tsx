// COMPONENTS
import Contact from './components/Contact';
import ImgPerfil from './components/ImgPerfil';
import Info from './components/Info';

// CSS
import '@/assets/css/layout/about.css';

const About = () => {
  return (
    <section className='grid-layout about section-layout'>

      <ImgPerfil />
      <Info />
      <Contact />

    </section>
  )
}

export default About