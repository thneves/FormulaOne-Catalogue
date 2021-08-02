import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { displaySeason } from '../../redux/actions';
import './styles.scss';
import RandomIndex from '../../helpers';
import Image from '../../assets/images/card-image5.png';

const SeasonCard = ({ season }) => {
  const year = season;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(displaySeason(year));
  };

  console.log(RandomIndex());
  console.log(Image);

  return (
    <Link to="/rankings" onClick={handleClick} className="card">
      <p className="card-season">{ season }</p>
      <img className="card-image" src={RandomIndex()} alt="formula one moment" />
    </Link>
  );
};

SeasonCard.propTypes = {
  season: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default SeasonCard;
