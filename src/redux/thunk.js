import store from './store';
import {
  fetchSeasonsRequest,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  fetchDriversRequest,
  fetchDriversSuccess,
  fetchDriversFailure,
} from './actions';
import { getSeasons, getDrivers } from '../requests/api';

const fetchSeasons = () => {
  store.dispatch(fetchSeasonsRequest());
  const requestSeasons = getSeasons();
  requestSeasons.then(seasons => {
    store.dispatch(fetchSeasonsSuccess(seasons));
  })
    .catch(error => {
      store.dispatch(fetchSeasonsFailure(error.message));
    });
};

const fetchDrivers = season => {
  store.dispatch(fetchDriversRequest());
  const requestDrivers = getDrivers(season);
  requestDrivers.then(drivers => {
    store.dispatch(fetchDriversSuccess(drivers));
  })
    .catch(error => {
      store.dispatch(fetchDriversFailure(error.message));
    });
};

export { fetchSeasons, fetchDrivers };
