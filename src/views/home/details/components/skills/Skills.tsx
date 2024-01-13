import '@/assets/css/layout/skills.css';
import Lenguage from './Lenguage';
import LenguagesProgramation from './LenguagesPrograming';
import Cv from './Cv';

const Skills = () => {
  return (
    <section className="skills">

      <Lenguage />
      <LenguagesProgramation />
      <Cv />

    </section>
  )
}

export default Skills