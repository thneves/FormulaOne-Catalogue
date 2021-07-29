import React from 'react';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => (
  <header>
    <nav className="nav">
      <img className="logo" src={Logo} alt="Formula 1 logo" />
      <div className="links">
        <span>API</span>
        <span>Development</span>
      </div>
    </nav>
  </header>
);

export default Header;
