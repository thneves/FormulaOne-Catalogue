import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const SeasonCard = ({ season }) => (
  <div className="card">
    <div className="card_image">
      <img alt="logotipo" />
      <Link to="/rankings" className="card-title">
        <p>{ season }</p>
      </Link>
    </div>
  </div>
);

SeasonCard.propTypes = {
  season: PropTypes.number.isRequired,
};

export default SeasonCard;
