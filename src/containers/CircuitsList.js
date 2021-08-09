import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import CircuitCard from '../components/CircuitCard';
import '../styles/containers/CircuitsList.scss';

import Loader from '../components/Loader';

const CircuitsList = () => {
  const [loading, setLoading] = useState(true);

  const circuitState = useSelector(state => state.circuitsReducer.circuits);
  console.log(circuitState);

  const printCircuits = circuitState.map(circuit => (
    <CircuitCard
      key={circuit.id}
      circuit={circuit.name}
      image={circuit.image}
      competition={circuit.competition.name}
      country={circuit.competition.location.country}
      city={circuit.competition.location.city}
      length={circuit.length}
      capacity={circuit.capacity}
      owner={circuit.owner}
    />
  ));

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="circuit-list">
      <Link to="/" className="back-icon-circuit"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
      <p className="circuit-head">Click on the circuit for map and details.</p>
      { printCircuits }
    </div>
  );
};

export default CircuitsList;
