import { combineReducers } from 'redux';
import seasons from './seasons';
import filterSeasons from './filterSeason';
import drivers from './drivers';
import currentSeason from './currentSeason';
import showTeam from './showTeam';
import showDriver from './showDriver';
import circuitsReducer from './circuits';

const rootReducer = combineReducers({
  seasons, filterSeasons, drivers, currentSeason, showTeam, showDriver, circuitsReducer,
});

export default rootReducer;
