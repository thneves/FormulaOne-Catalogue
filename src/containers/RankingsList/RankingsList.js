import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchDrivers } from '../../redux/thunk';
import DriversRanking from '../../components/DriversRanking/index';
import './styles.scss';

const RankingsList = () => {
  const currentSeason = useSelector(state => state.currentSeason);
  const rankingState = useSelector(state => state.drivers.drivers);
  const bestEightRank = (rankingState.filter((driver, index) => index < 8));

  useEffect(() => {
    fetchDrivers(currentSeason);
  }, []);

  console.log(bestEightRank);

  const printRanking = bestEightRank.map(driver => (
    <DriversRanking
      key={driver.position}
      driver={driver.driver.name}
      driverImg={driver.driver.image}
      position={driver.position}
      points={driver.points}
      team={driver.team.name}
      teamLogo={driver.team.logo}
      wins={driver.wins}
    />
  ));

  return (
    <>
      <div className="ranking">
        <div className="ranking-head">
          <Link to="/" className="back-icon"><FontAwesomeIcon icon={faLongArrowAltLeft}>Back</FontAwesomeIcon></Link>
          <h3>
            Best 8 drivers - Season
            {' '}
            { currentSeason }
          </h3>
        </div>
        { printRanking }
      </div>
    </>
  );
};

export default RankingsList;
