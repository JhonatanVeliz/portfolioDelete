import Image from "next/image"

const Lenguage = () => {
  return (
    <div className="skills__lenguages">

      <h4 className="skills__title">Lenguajes:</h4>
      
      <div className="lenguage__content">

        <p className="lenguage__content__item">

          <span>Español</span>

          <Image src="/images/español.png" alt="español" width="25" height="25" />

        </p>

        <p className="lenguage__content__item">

          <span>Inglés</span>

          <Image src="/images/english.png" alt="español" width="25" height="25" />

        </p>

      </div>

    </div>
  )
}

export default Lenguage