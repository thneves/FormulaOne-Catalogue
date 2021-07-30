import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetchSeasons from '../../redux/thunk';
import './styles.scss';
import SeasonCard from '../../components/Season/index';
import FilterModal from '../FilterModal';

const SeasonsList = () => {
  useEffect(() => {
    fetchSeasons();
  }, []);

  const seasonListState = useSelector(state => state.seasons.seasons);
  const filterSeasonState = useSelector(state => state.filterSeasons);
  console.log(filterSeasonState);
  // const dispatch = useDispatch();

  const printSeasons = seasonListState.map(season => (
    <SeasonCard key={season} season={season} />
  ));

  console.log(filterSeasonState);

  return (
    <>
      <FilterModal years={seasonListState} />
      <div className="seasons-list">
        { printSeasons }
      </div>
    </>
  );
};

export default SeasonsList;
