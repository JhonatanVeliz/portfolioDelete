import Link from "next/link";
import { FC } from "react";

interface Props {
  fileSrc : string;
  removeView : () => void
}

const CertificateVisor: FC<Props> = ({ fileSrc, removeView }) => {
  return (
    <aside className="visor">

      <div className="visor__container">

        <nav className="visor__close">
          <Link 
            href="#details" 
            className="visor__close__btn"
            onClick={removeView}
          >
            Cerrar
          </Link>
        </nav>

        <embed src={fileSrc} type="application/pdf" className="visor__file">

        </embed>

      </div>

    </aside>
  )
}

export default CertificateVisor