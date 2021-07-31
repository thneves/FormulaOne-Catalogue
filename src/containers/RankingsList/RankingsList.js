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
      img={driver.driver.image}
      position={driver.position}
      points={driver.points}
    />
  ));

  return (
    <>
      <div className="ranking">
        { printRanking }
      </div>
    </>
  );
};

export default RankingsList;
