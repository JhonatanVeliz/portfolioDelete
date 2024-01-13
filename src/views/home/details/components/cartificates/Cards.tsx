// COMPONENTS
import Card from './Card';
// UTILITIES
import { generatorId } from '@/utilities';
// CSS
import '@/assets/css/layout/detailsCertificates.css';
import { useState } from 'react';
import CertificateVisor from './CertificateVisor';

interface CertificateView {
  isShow : boolean;
  file : string
}

const Cards = () => {

  const certificates = [
    { 
      img : '/images/certificates/fundamentos.png', 
      id : generatorId(), 
      title : 'Fundamentos',
      paragraph : 'Certificación de Fundamentos de Programación.',
      file : '/files/fundamentos.pdf'
    },
    { 
      img : '/images/certificates/git.png', 
      id : generatorId(), 
      title : 'Git y Github',
      paragraph : 'Certificación de Control de versiones.',
      file: '/files/git.pdf'
    }
  ];

  const [ viewCertificate, setViewCertificate ] = useState<CertificateView>({ isShow : false, file : '' });

  const changeViewCertificate = (file:string) => {
    setViewCertificate({ isShow : true, file });
  }

  const removeViewCertificate = () => {
    setViewCertificate({ isShow : false, file : '' });
  }

  return (
    <section>
      <div className="certificates">
        {
          certificates?.map( (card) =>(
            <Card 
              key={card.id}
              img={card.img}
              title={card.title}
              paragraph={card.paragraph}
              changeViewCertificate={changeViewCertificate}
              file={card.file}
            />
          ))
        }
      </div>

      {
        viewCertificate?.isShow && (
        <CertificateVisor 
          fileSrc={viewCertificate.file} 
          removeView={removeViewCertificate} 
        />
        )
      }
    </section>
  )
}

export default Cards