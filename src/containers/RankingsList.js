import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchDrivers } from '../redux/thunk';
import DriversRanking from '../components/DriversRanking';
import Loader from '../components/Loader';
import '../styles/containers/RankingsList.scss';

const RankingsList = () => {
  const currentSeason = useSelector(state => state.currentSeason);
  const rankingState = useSelector(state => state.drivers.drivers);
  const bestEightRank = (rankingState.filter((driver, index) => index < 8));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDrivers(currentSeason);
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

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
      driverId={driver.driver.id}
      teamId={driver.team.id}
    />
  ));

  return (
    <>
      <div className="ranking">
        <div className="ranking-head">
          <Link to="/" className="back-icon"><FontAwesomeIcon icon={faArrowCircleLeft}>Back</FontAwesomeIcon></Link>
          <h3 className="ranking-text">
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
