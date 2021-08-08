import store from './store';
import {
  fetchSeasonsRequest,
  fetchSeasonsSuccess,
  fetchSeasonsFailure,
  fetchDriversRequest,
  fetchDriversSuccess,
  fetchDriversFailure,
  fetchTeamRequest,
  fetchTeamSuccess,
  fetchTeamFailure,
  fetchDriverRequest,
  fetchDriverSuccess,
  fetchDriverFailure,
} from './actions';
import {
  getSeasons, getDrivers, getTeamInfo, getDriverInfo,
} from '../requests/api';

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

const fetchTeam = team => {
  store.dispatch(fetchTeamRequest());
  const requestTeam = getTeamInfo(team);
  requestTeam.then(team => {
    store.dispatch(fetchTeamSuccess(team));
  })
    .catch(error => {
      store.dispatch(fetchTeamFailure(error.message));
    });
};

const fetchOneDriver = driver => {
  store.dispatch(fetchDriverRequest());
  const requestDriver = getDriverInfo(driver);
  requestDriver.then(driver => {
    store.dispatch(fetchDriverSuccess(driver));
  })
    .catch(error => {
      store.dispatch(fetchDriverFailure(error.mesage));
    });
};

export {
  fetchSeasons, fetchDrivers, fetchTeam, fetchOneDriver,
};
