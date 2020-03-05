import React from 'react';
import './style.sass';
import facebook from './img/facebook-logo.png';
import instagram from './img/instagram-logo.png';
import twitter from './img/twitter-logo.png';

const Info = () =>
    <div className="info">
        <div className="info__wrap wrap">
            <div className="info__text--bg">
                 12.000+
            </div>
            <div className="info__text--sm">
                 copies sold all over the world
            </div>
            <div className="info__socials">
                 <a href="fb.com">
                     <img src={facebook} alt="Facebook"/>
                 </a>
                 <a href="instagram.com">
                     <img src={instagram} alt="Instagram"/>
                 </a>
                 <a href="twitter.com">
                     <img src={twitter} alt="Twitter"/>
                 </a>
            </div>
        </div>
    </div>
    
export default Info;
