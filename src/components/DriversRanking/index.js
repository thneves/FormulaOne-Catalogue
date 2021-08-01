import PropTypes from 'prop-types';
import './styles.scss';

const DriversRanking = ({
  driver,
  driverImg,
  position,
  points,
  wins,
  teamLogo,
}) => (
  <>
    <div className="driver-card">
      <span className="driver-position">
        { position }
      </span>
      <img className="driver-image" src={driverImg} alt="driver profile" />
      <div className="driver-info">
        <span className="driver-name">
          {driver}
        </span>
        <span>
          Points&nbsp;&nbsp;
          <strong>{ points }</strong>
        </span>
        <span>
          Wins&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>{ wins }</strong>
        </span>
      </div>
      <img className="team-logo" src={teamLogo} alt="team logo" />
    </div>
  </>
);

DriversRanking.propTypes = {
  driver: PropTypes.string.isRequired,
  driverImg: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  teamLogo: PropTypes.string.isRequired,
  wins: PropTypes.number.isRequired,
};

export default DriversRanking;
