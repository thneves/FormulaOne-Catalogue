import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { displaySeason } from '../redux/actions';
import '../styles/components/SeasonCard.scss';
import RandomImage from '../helpers/RandomImage';

const SeasonCard = ({ season }) => {
  const year = season;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(displaySeason(year));
    history.push('/rankings');
  };

  return (
    <>
      <div role="presentation" onClick={handleClick} className="card">
        <p className="card-season">{ season }</p>
        <img className="card-image" src={RandomImage()} alt="formula one moment" />
      </div>
    </>
  );
};

SeasonCard.propTypes = {
  season: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default SeasonCard;
