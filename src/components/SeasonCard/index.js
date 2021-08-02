import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const SeasonCard = ({ season }) => {
  const [currentSeason, setCurrentSeason] = useState(0);

  const handleClick = () => {
    setCurrentSeason(currentSeason + season);
  };

  return (
    <Link to="/rankings" className="card">
      <p className="card-season">{ season }</p>
    </Link>
  );
};

SeasonCard.propTypes = {
  season: PropTypes.number.isRequired,
};

export default SeasonCard;
