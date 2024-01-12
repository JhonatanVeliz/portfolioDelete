// NEXT COMPONENTS
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <footer className='about__contact'>

      <div className="about__contact__socials">

        <Link href="/">
          <Image 
            src="/images/in.png" 
            alt="github" 
            width="40"
            height="40"
          />
        </Link>

        <Link href="/">
          <Image 
            src="/images/github.png" 
            alt="github" 
            width="40"
            height="40"
          />
        </Link>

        <Link href="/">
          <Image 
            src="/images/whatsApp.png" 
            alt="github" 
            width="40"
            height="40"
          />
        </Link>

      </div>

      <div>
        <Link href="/" className="about__contact__me">
          contactame
        </Link>
      </div>

    </footer>
  )
}

export default Contact