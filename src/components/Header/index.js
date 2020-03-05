import React from 'react';
import Responsive from './../Responsive'
import './style.sass'
import logo from './img/logo.png'
import login from './img/login.svg'

const Header = ({menu}) =>
    <header className="header">
        <div className="header__wrap wrap">
             <div className="header__top">
                <a className="header__link" href="/">
                    <img src={logo} alt="Logo"/>
                    <div className="header__title">
                         Bookshop
                    </div>
                </a>
                <div className="header__search">
                     <input className="search__input" placeholder="Search..." type="search"/>
                </div>
                <div className="header__login">
                     <img src={login} alt="Login"/>
                </div>
             </div>
             <nav className="header__nav nav">
                <ul className="nav__list">
                    {menu.map(item =>
                        <li className="nav__item" key={item.id}>
                            <a className="nav__link" href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    )}
                </ul>
             </nav>
        </div>
        <Responsive menu={menu}/>
    </header>

export default Header;
