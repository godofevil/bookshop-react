import React from 'react';
import './style.sass';
import background from './img/main.png';

const Main = () =>
    <main className="main">
        <div className="main__wrap wrap">
             <div className="main__left">
                  <div className="main__text1">
                       BACK TO SCHOOL
                  </div>
                  <div className="main__text2">
                       SPECIAL 50% OFF
                  </div>
                  <div className="main__text3">
                       For our student community
                  </div>
                  <button className="main__button button__gradient">Get the deal</button>
             </div>
             <div className="main__right">
                  <img src={background} alt="Background"/>
                  <div className="main__slider">
                       <div className="slider__line"></div>
                       <div className="slider__text">
                            <span className="slider__text--blue">02</span> / 05
                       </div>
                  </div>
             </div>
        </div>
    </main>

export default Main;
