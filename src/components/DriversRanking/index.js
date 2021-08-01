import PropTypes from 'prop-types';
import './styles.scss';

const DriversRanking = ({
  driver,
  driverImg,
  position,
  points,
  team,
  teamLogo,
}) => (
  <>
    <div className="driver-card">
      <img className="driver-image" src={driverImg} alt="driver profile" />
      <div className="driver-info">
        <p className="driver-name">{ driver }</p>
        <span className="driver-position">
          { position }
          {' '}
        </span>
        <span className="driver-points">
          { points }
          {' '}
        </span>
      </div>
      <div className="driver-team">
        <p className="team-name">{team}</p>
        <img className="team-log" src={teamLogo} alt="team logo" />
      </div>
    </div>
  </>
);

DriversRanking.propTypes = {
  driver: PropTypes.string.isRequired,
  driverImg: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  team: PropTypes.string.isRequired,
  teamLogo: PropTypes.string.isRequired,
};

export default DriversRanking;
