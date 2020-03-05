import React from 'react';
import './style.sass';
import background from './img/quotation.png';

const Quotation = () =>
    <div className="quotation" id="author">
         <img src={background} alt="Background"/>
         <div className="quotation__wrap wrap">
              <div className="quotation__left"></div>
              <div className="quotation__right">
                   <div className="quotation__title">
                        “This book is a piece from heaven”
                   </div>
                   <div className="quotation__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.”
                   </div>
                   <div className="quotation__author">
                        <span>Mark Jackson</span> - Author
                   </div>
                   <button className="quotation__button button__gradient">Buy Ebook</button>
              </div>
         </div>
    </div>

export default Quotation;
