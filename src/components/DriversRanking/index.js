import PropTypes from 'prop-types';
import './styles.scss';

const DriversRanking = ({
  driver,
  img,
  position,
  points,
}) => (
  <>
    <img src={img} alt="logotipo" />
    <div className="card">
      <div className="card_image">
        <div className="card-title">
          <p>{ driver }</p>
          <span>
            { points }
            {' '}
          </span>
          <span>
            { position }
            {' '}
          </span>
        </div>
      </div>
    </div>
  </>
);

DriversRanking.propTypes = {
  driver: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
};

export default DriversRanking;
