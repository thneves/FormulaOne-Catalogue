import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetchSeasons from '../redux/thunk';
import './styles.scss';
import SeasonCard from '../components/Season/index';

const SeasonsList = () => {
  useEffect(() => {
    fetchSeasons();
  }, []);

  const seasonListState = useSelector(state => state.seasons.seasons);

  const printSeasons = seasonListState.map(season => (
    <SeasonCard key={season} season={season} />
  ));

  return (
    <div className="seasons-list">
      { printSeasons }
    </div>
  );
};

export default SeasonsList;
