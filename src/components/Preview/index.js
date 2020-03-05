import React from 'react';
import './style.sass';
import printer from './img/printer.png'
import book from './img/open-book.png'
import file from './img/file.png'

const Preview = () =>
    <div className="preview" id="preview">
         <div className="preview__wrap wrap">
              <div className="preview__title block__title">
                   eBook Preview
              </div>
              <div className="preview__subtitle block__subtitle">
                   This is how your new eBook will look.
              </div>
              <div className="preview__content">
                   <div className="preview__left">
                        <div className="preview__text">
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices</p>
                             <p className="preview__chapter">Chapter IV</p>
                             <p>Duis sed odio sit amet nibh vulputate cursus a sit roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id eliton neque elit ed ut imperdiet nisi massa sodales verbuctum etos. amet mauris morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                             <p>Mauris in erat justo dullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc setu retiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Tur adipiscing elit nam dui lacuam nec tellus a odio tincidunt auctor a ornare odio. Sed non.Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad</p>
                        </div>
                   </div>
                   <div className="preview__right">
                        <div className="preview__list">
                             <div className="preview__item">
                                  <div className="preview__icon circle__icon">
                                       <img src={printer} alt="Ready to print"/>
                                  </div>
                                  <div className="preview__description">
                                       <div className="preview__text--bg">
                                            Ready to print
                                       </div>
                                       <div className="preview__text--sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                       </div>
                                  </div>
                             </div>
                             <div className="preview__item">
                                  <div className="preview__icon circle__icon">
                                       <img src={book} alt="Ready to print"/>
                                  </div>
                                  <div className="preview__description">
                                       <div className="preview__text--bg">
                                            Ready to print
                                       </div>
                                       <div className="preview__text--sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                       </div>
                                  </div>
                             </div>
                             <div className="preview__item">
                                  <div className="preview__icon circle__icon">
                                       <img src={file} alt="Well organised"/>
                                  </div>
                                  <div className="preview__description">
                                       <div className="preview__text--bg">
                                            Well organised
                                       </div>
                                       <div className="preview__text--sm">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                       </div>
                                  </div>
                             </div>
                        </div>
                   </div>
              </div>
         </div>
    </div>

export default Preview;
