import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchDrivers } from '../../redux/thunk';
import DriversRanking from '../../components/DriversRanking/index';
import './styles.scss';

const RankingsList = () => {
  useEffect(() => {
    fetchDrivers();
    // console.log('I fire once');
  }, []);

  const rankingState = useSelector(state => state.drivers.drivers);
  console.log(rankingState);
  const bestEightRank = (rankingState.filter((driver, index) => index < 8));
  console.log(bestEightRank);

  // console.log(rankingState.driver);

  const printRanking = bestEightRank.map(driver => (
    <DriversRanking
      key={driver.points}
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
        <h3>Best 8 drivers - Season 2019</h3>
        { printRanking }
      </div>
    </>
  );
};

export default RankingsList;
