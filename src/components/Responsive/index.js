import React from 'react';
import './style.sass'
import menuIcon from './img/menu.svg'
import closeIcon from './img/close.svg'


class Responsive extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             isMenuVisible: false,
             menuClassName: 'responsive__menu'
         }
     }

     showMenu = () => {
         this.setState(state => {
             state.isMenuVisible = !state.isMenuVisible;
             state.menuClassName = state.isMenuVisible
                ? 'responsive__menu responsive__menu--visible'
                : 'responsive__menu';
             return state;
         });
     }

     render() {
         return(
             <div className="responsive">
                 <div onClick={this.showMenu} className="responsive__button">
                       <img src={menuIcon} alt="Menu"/>
                 </div>

                 <div className={this.state.menuClassName}>
                      <div onClick={this.showMenu} className="responsive__close">
                           <img src={closeIcon} alt="Close"/>
                      </div>
                      <ul className="menu__list">
                          {this.props.menu.map(item =>
                              <li className="menu__item" key={item.id}>
                                  <a className="menu__link" href={item.link}>
                                      {item.title}
                                  </a>
                              </li>
                          )}
                      </ul>
                 </div>
             </div>
         );
     }
 }

export default Responsive;
