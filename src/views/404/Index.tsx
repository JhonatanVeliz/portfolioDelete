'use client';
// NEXT
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// CSS
import '@/assets/css/layout/notFound.css';
import NotFoundInfo from './components/NotFoundInfo';

const NotFound = () => {

  const pathName = usePathname();

  return (
    <main className='notFound'>
      
      <div className='notFound__container grid-layout'>

        <Image
          src="./images/not-found.svg"
          alt="imagen de pagina no encontrada"
          width="400"
          height="400"
        />

        <NotFoundInfo pathName={pathName} />

      </div>

    </main>
  )
}

export default NotFound