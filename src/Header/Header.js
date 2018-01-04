import React, { Component } from 'react';
import logo from '../logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <a href="/" className="logo"><img src={ logo } alt="Logo" className="logo__img"/></a>
        <div className="user">
          <img src={ logo } alt="Avatar" className="user__avatar"/>
          <div className="user__func">
            <div className="user__name">Audrey Sullivon</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
