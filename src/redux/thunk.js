import store from './store';
import { fetchSeasonsRequest, fetchSeasonsSuccess, fetchSeasonsFailure } from './actions';
import getSeasons from '../requests/api';

const fetchSeasons = () => {
  store.dispatch(fetchSeasonsRequest());
  const requestSeasons = getSeasons();
  requestSeasons.then(seasons => store.disptach(fetchSeasonsSuccess(seasons))).catch(error => {
    store.dispatch(fetchSeasonsFailure(error));
  });
};

export default fetchSeasons;
