import { combineReducers } from 'redux';
import seasons from './seasons';
import filterSeasons from './filterSeason';
import drivers from './drivers';
import currentSeason from './currentSeason';
import showTeam from './showTeam';
import showDriver from './showDriver';

const rootReducer = combineReducers({
  seasons, filterSeasons, drivers, currentSeason, showTeam, showDriver,
});

export default rootReducer;
