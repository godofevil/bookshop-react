import React from 'react';
import './style.sass'
import client from './img/client.png'
import star from './img/star.png'
import halfstar from './img/halfstar.png'

const Reviews = () =>
    <div className="reviews" id="reviews">
         <div className="reviews__wrap wrap">
              <div className="review__title block__title">
                   Clients Reviews
              </div>
              <div className="review__subtitle block__subtitle">
                   A few reviews from satisfied clients
              </div>
              <div className="reviews__carousel">
                   <div className="reviews__item">
                        <div className="client__avatar">
                             <img src={client} alt="Client"/>
                        </div>
                        <div className="client__name">
                             Andrei Fredy
                        </div>
                        <div className="client__description">
                             client from romania
                        </div>
                        <div className="client__review">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. et dolore magna aliqua. Tuis ipsum sus</p>
                         </div>
                        <div className="client__rate">
                            Rate this review
                        </div>
                        <div className="client__stars">
                             <img src={star} alt="Rate"/>
                             <img src={star} alt="Rate"/>
                             <img src={star} alt="Rate"/>
                             <img src={star} alt="Rate"/>
                             <img src={halfstar} alt="Rate"/>
                        </div>
                   </div>
                   <div className="reviews__item">
                        <div className="client__avatar">
                             <img src={client} alt="Client"/>
                        </div>
                        <div className="client__name">
                             Andrei Fredy
                        </div>
                        <div className="client__description">
                             client from romania
                        </div>
                        <div className="client__review">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. et dolore magna aliqua. Tuis ipsum sus</p>
                         </div>
                        <div className="client__rate">
                            Rate this review
                        </div>
                        <div className="client__stars">
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={halfstar} alt="Rate"/>
                        </div>
                   </div>
                   <div className="reviews__item">
                        <div className="client__avatar">
                             <img src={client} alt="Client"/>
                        </div>
                        <div className="client__name">
                             Andrei Fredy
                        </div>
                        <div className="client__description">
                             client from romania
                        </div>
                        <div className="client__review">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. et dolore magna aliqua. Tuis ipsum sus</p>
                         </div>
                        <div className="client__rate">
                            Rate this review
                        </div>
                        <div className="client__stars">
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={star} alt="Rate"/>
                            <img src={halfstar} alt="Rate"/>
                        </div>
                   </div>
              </div>
         </div>
    </div>

export default Reviews;
