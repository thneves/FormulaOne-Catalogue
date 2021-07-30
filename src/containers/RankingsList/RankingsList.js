import React, { useEffect } from 'react';
import { fetchDrivers } from '../../redux/thunk';
import './styles.scss';

const RankingsList = () => {
  useEffect(() => {
    fetchDrivers();
  }, []);

  return (
    <div className="ranking">oi</div>
  );
};

export default RankingsList;
