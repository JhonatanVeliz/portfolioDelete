'use client';
import '@/assets/css/layout/footer.css';
import FooterLine from './components/FooterLine';
import FooterLinks from './components/FooterLinks';

const Footer = () => {


  return (
    <footer className='footer'>

      <div className="grid-layout footer-container">
        <FooterLine />
        <FooterLinks />
      </div>

    </footer>
  )
}

export default Footer