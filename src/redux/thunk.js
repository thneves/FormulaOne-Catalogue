import store from './store';
import { fetchSeasonsRequest, fetchSeasonsSuccess, fetchSeasonsFailure } from './actions';
import getSeasons from '../requests/api';

const fetchSeasons = () => {
  store.dispatch(fetchSeasonsRequest());
  const requestSeasons = getSeasons();
  console.log(requestSeasons);
  requestSeasons.then(seasons => {
    console.log(seasons);
    store.dispatch(fetchSeasonsSuccess(seasons));
    console.log('why?');
  })
    .catch(error => {
      store.dispatch(fetchSeasonsFailure(error.message));
    });
};

export default fetchSeasons;
