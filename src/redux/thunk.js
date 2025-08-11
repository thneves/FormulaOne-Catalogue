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
  fetchTeamsRequest,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  fetchCircuitsRequest,
  fetchCircuitsSuccess,
  fetchCircuitsFailure,
} from './actions';
import {
  getSeasons, getDriversRanking, getTeamInfo, getDriverInfo, getTeamsRanking, getCircuits
} from '../requests/api';

const fetchSeasons = () => dispatch => {
  dispatch(fetchSeasonsRequest());
  return getSeasons()
    .then(seasons => {
      dispatch(fetchSeasonsSuccess(seasons));
    })
    .catch(error => {
      dispatch(fetchSeasonsFailure(error.message));
    });
};

const fetchTeams = season => dispatch => {
  dispatch(fetchTeamsRequest());
  return getTeamsRanking(season)
    .then(teams => {
      dispatch(fetchTeamsSuccess(teams));
    })
    .catch(error => {
      dispatch(fetchTeamsFailure(error.message));
    }); 
} 

const fetchDrivers = season => dispatch => {
  dispatch(fetchDriversRequest());
  return getDriversRanking(season)
    .then(drivers => {
      dispatch(fetchDriversSuccess(drivers));
    })
    .catch(error => {
      dispatch(fetchDriversFailure(error.message));
    });
};

const fetchTeam = team => dispatch => {
  dispatch(fetchTeamRequest());
  return getTeamInfo(team)
    .then(team => {
      dispatch(fetchTeamSuccess(team));
    })
    .catch(error => {
      dispatch(fetchTeamFailure(error.message));
    });
};

const fetchOneDriver = driver => dispatch => {
  dispatch(fetchDriverRequest());
  return getDriverInfo(driver)
    .then(driver => {
      dispatch(fetchDriverSuccess(driver));
    })
    .catch(error => {
      dispatch(fetchDriverFailure(error.message));
    });
};

const fetchCircuits = season => dispatch => {
  dispatch(fetchCircuitsRequest());
  return getCircuits(season)
    .then(circuits => {
      dispatch(fetchCircuitsSuccess(circuits));
    })
    .catch(error => {
      dispatch(fetchCircuitsFailure(error.message));
    });
};

export {
  fetchSeasons, fetchDrivers, fetchTeam, fetchOneDriver, fetchTeams, fetchCircuits,
};
