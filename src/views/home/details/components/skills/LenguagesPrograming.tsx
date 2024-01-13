import { generatorId } from "@/utilities"
import Image from "next/image"

const LenguagesProgramation = () => {

  const lenguages = [
    { img : '/images/figma.png', title : 'figma', id : generatorId()},
    { img : '/images/html.png', title : 'html', id : generatorId()},
    { img : '/images/css.png', title : 'css', id : generatorId()},
    { img : '/images/sass.png', title : 'sass', id : generatorId()},
    { img : '/images/tailwind.png', title : 'tailwind', id : generatorId()},
    { img : '/images/js.png', title : 'javascript', id : generatorId()},
    { img : '/images/react.png', title : 'react', id : generatorId()},
    { img : '/images/next.png', title : 'nextjs', id : generatorId()},
    { img : '/images/git.png', title : 'git', id : generatorId()},
  ];

  return (
    <div className="skills__lenguages">

      <h4 className="skills__title">Habilidades Técnicas:</h4>

      <div className="skills__lenguages__programing">
        {
          lenguages?.map( lenguage => (
            <Image 
              key={lenguage.id} 
              src={lenguage.img} 
              alt={lenguage.title}
              width="35"
              height="35"
              title={lenguage.title}
            />
          ))
        }
      </div>
    </div>
  )
}

export default LenguagesProgramation