import { createElement } from 'react';
// import { Logo, Heading, SocialMediaWidget } from '../../components';
import { Link } from 'react-router-dom';
import Image from '../../assets/img/logo.png'
import navigation from '../../data/navigation.json';
import { Logo } from '../Logo/Logo';
import './Footer.css'



function Footer ()  {
  return (
    <footer role="region" aria-label="Footer Section">
      <Logo
        className="LL-FooterLogo"
        src={Image}
        height="60px" alt='logo'
      />

      <section className="LL-FooterMenu">
        <h4 tag="h4" size="base">
          Menu
        </h4>
        <nav className="LL-Navigation LL-FooterNavigation">
          <ul>
          <ul>
            <li> <Link to="/">HOME</Link> </li>
            {/* <li> <Link to="/blog-grid">Blog</Link> </li> */}
            <li> <Link to="/about">ABOUT US</Link> </li>
            <li> <Link to="/menu">OUR MENU</Link> </li>
            <li> <Link to="/contact">CONTACT Us</Link> </li>
        </ul>
          



          
         </ul>
        </nav>
      </section>

      <section className="LL-FooterContact">
        <h4 tag="h4" size="base">
          Contact
        </h4>
        <article>
          <p>915 NE Alberta St, Portland, OR 97211</p>
          <p>(503) 719-6200</p>
        
        </article>
      </section>

    </footer>
  );
};
export default Footer