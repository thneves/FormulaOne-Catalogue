import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displaySeason } from '../../redux/actions';
import './styles.scss';

const SeasonCard = ({ season }) => {
  const year = season;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(displaySeason(year));
  };

  return (
    <Link to="/rankings" onClick={handleClick} className="card">
      <p className="card-season">{ season }</p>
    </Link>
  );
};

SeasonCard.propTypes = {
  season: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default SeasonCard;
