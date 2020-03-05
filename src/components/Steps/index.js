import React from 'react';
import './style.sass'
import book from './img/book.png'
import cash from './img/cash-register.png'
import support from './img/support.png'
import reading from './img/reading.png'

const Steps = () =>
    <div className="steps" id="steps">
         <div className="steps__wrap wrap">
              <div className="steps__title block__title">
                   It’s easy as this
              </div>
              <div className="steps__subtitle block__subtitle">
                   Four easy steps to get your new eBook. What are your waiting for?
              </div>
              <div className="steps__list">
                   <div className="steps__item">
                        <div className="step__icon circle__icon" steps-number="1">
                             <img src={book} alt="Step 1"/>
                        </div>
                        <div className="step__title">
                             eBook Preview
                        </div>
                        <div className="step__description">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                   </div>
                   <div className="steps__divider"></div>
                   <div className="steps__item">
                        <div className="step__icon circle__icon" steps-number="2">
                             <img src={cash} alt="Step 2"/>
                        </div>
                        <div className="step__title">
                             Purchase eBook
                        </div>
                        <div className="step__description">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                   </div>
                   <div className="steps__divider"></div>
                   <div className="steps__item">
                        <div className="step__icon circle__icon" steps-number="3">
                             <img src={support} alt="Step 3"/>
                        </div>
                        <div className="step__title">
                             Select format
                        </div>
                        <div className="step__description">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                   </div>
                   <div className="steps__divider"></div>
                   <div className="steps__item">
                        <div className="step__icon circle__icon" steps-number="4">
                             <img src={reading} alt="Step 4"/>
                        </div>
                        <div className="step__title">
                             Start reading
                        </div>
                        <div className="step__description">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </div>
                   </div>
              </div>
              <button className="steps__button button__gradient">Get the deal</button>
         </div>
    </div>

export default Steps;
