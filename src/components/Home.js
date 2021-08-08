import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Link to="/seasons">seasons</Link>
    <Link to="/circuits">circuits</Link>
  </div>
);

export default Home;
