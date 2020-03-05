import React from 'react';
import './style.sass'
import logo from './img/logo-footer.png'
import facebook from './img/facebook.svg'
import instagram from './img/instagram.svg'
import pinterest from './img/pinterest.svg'

const Footer = ({menu}) =>
    <div className="footer">
         <div className="footer__wrap wrap">
              <div className="footer__top">
                   <div className="footer__logo">
                        <img src={logo} alt="Logo"/>
                   </div>
                   <nav className="footer__nav">
                       <ul className="footer__list">
                           {menu.map(item =>
                               <li className="footer__item" key={item.id}>
                                   <a className="footer__link" href={item.link}>
                                       {item.title}
                                   </a>
                               </li>
                           )}
                       </ul>
                   </nav>
                   <div className="footer__socials">
                        <a href="fb.com">
                            <img src={facebook} alt="Facebook"/>
                        </a>
                        <a href="instagram.com">
                            <img src={instagram} alt="Instagram"/>
                        </a>
                        <a href="pinterest.com">
                            <img src={pinterest} alt="Pinterest"/>
                        </a>
                   </div>
              </div>
              <div className="footer__credits">
                   © 2018 Hogash Studio. All rights reserved.
              </div>
         </div>
    </div>

export default Footer;
