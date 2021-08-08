import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCircuits } from '../redux/thunk';

const Home = () => (
  <div>
    <Link to="/seasons">seasons</Link>
    <Link to="/circuits" onClick={fetchCircuits()}>circuits</Link>
  </div>
);

export default Home;
