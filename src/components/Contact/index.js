import React from 'react';
import './style.sass'

const Contact = () =>
    <div className="contacts" id="contact">
        <div className="contacts__wrap wrap">
            <div className="contacts__title block__title">
                 Contacts
            </div>
            <div className="contacts__block">
                 <div className="contacts__left">
                      <div className="contacts__item">
                           <span className="contacts__item--blue">Phone:</span> 000-000-0000
                      </div>
                      <div className="contacts__item">
                           <span className="contacts__item--blue">Email:</span> your@example.com
                      </div>
                      <div className="contacts__item contacts__item--address">
                           1701 N. Charles Street Baltimore, MD 21202
                      </div>
                      <div className="contacts__item--sm">
                           MON–FRI 09.00 — 18.00 <br/>
                           SAT–SUN 10.00 — 18.00
                      </div>
                 </div>
                 <div className="contacts__right">
                      <input className="contacts__input" placeholder="Name"/>
                      <input className="contacts__input" placeholder="Email Address"/>
                      <textarea className="contacts__input" placeholder="Message"/>
                      <div className="contacts__button button__gradient">
                           Send message
                      </div>
                 </div>
            </div>
        </div>
    </div>

export default Contact;
