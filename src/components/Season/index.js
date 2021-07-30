import PropTypes from 'prop-types';
import './styles.scss';

const SeasonCard = ({ season }) => (
  <div className="card">
    <div className="card_image">
      <img alt="logotipo" />
      <div className="card-title">
        <p>{ season }</p>
      </div>
    </div>
  </div>
);

SeasonCard.propTypes = {
  season: PropTypes.number.isRequired,
};

export default SeasonCard;
