import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import './styles.scss';

const Header = () => (
  <header>
    <nav className="nav">
      <Link to="/"><img className="logo" src={Logo} alt="Formula 1 logo" /></Link>
      <div className="links">
        <span>API</span>
        <span>Development</span>
      </div>
    </nav>
  </header>
);

export default Header;
