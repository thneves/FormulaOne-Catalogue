import { useEffect } from 'react';
import fetchSeasons from '../redux/thunk';
import './styles.scss';
import SeasonCard from '../components/Season/index';

const SeasonsList = () => {
  useEffect(() => {
    fetchSeasons();
  }, []);

  return (
    <div className="seasons-list">
      <h1>Formula 1 Seasons</h1>
      <SeasonCard />
    </div>
  );
};

export default SeasonsList;
