import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchSeasons } from '../../redux/thunk';
import './styles.scss';
import SeasonCard from '../../components/SeasonCard/index';
import FilterModal from '../FilterModal';
import Loader from '../../components/Loader';

const SeasonsList = () => {
  const seasonListState = useSelector(state => state.seasons.seasons);
  const filterSeasonState = useSelector(state => state.filterSeasons);

  const printSeasons = (
    filterSeasonState.length === 0
      ? seasonListState.map(season => <SeasonCard key={season} season={season} />)
      : filterSeasonState.map(season => <SeasonCard key={season} season={season} />)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeasons();
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <FilterModal />
      <div className="seasons-list">
        { printSeasons }
      </div>
    </>
  );
};

export default SeasonsList;
