import PropTypes from 'prop-types';
import '../styles/components/DriversRanking.scss';
import defaultJohn from '../assets/images/defaultjohn.png';
import TeamModal from './TeamModal';

const DriversRanking = ({
  driver,
  driverImg,
  position,
  points,
  wins,
  teamLogo,
}) => {
  console.log('qualquer mierda');

  return (
    <>
      <div className="driver-card">
        <span className="driver-position">
          { position }
        </span>
        <img className="driver-image" onError={e => { e.target.src = defaultJohn; }} src={driverImg} alt="driver profile" />
        <div className="driver-info">
          <span className="driver-name">
            {driver}
          </span>
          <span className="points-wins">
            Points&nbsp;&nbsp;
            <strong>{ points }</strong>
          </span>
          <span className="points-wins">
            Wins&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>{ wins }</strong>
          </span>
        </div>
        <TeamModal image={teamLogo} />
      </div>
    </>
  );
};

DriversRanking.defaultProps = {
  points: 0,
  wins: 0,
};

DriversRanking.propTypes = {
  driver: PropTypes.string.isRequired,
  driverImg: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  points: PropTypes.number,
  teamLogo: PropTypes.string.isRequired,
  wins: PropTypes.number,
};

export default DriversRanking;
