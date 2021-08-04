import React from 'react';
import Logo from '../assets/images/logo.png';
import '../styles/components/Header.scss';

const Header = () => (
  <header>
    <nav className="nav">
      <img className="logo" src={Logo} alt="Formula 1 logo" />
      <div className="links">
        <a href="https://rapidapi.com/api-sports/api/api-formula-1/" target="_blank" rel="noreferrer">
          API
        </a>
        <a href="https://github.com/thneves/FormulaOne-Catalogue" target="_blank" rel="noreferrer">
          Development
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
