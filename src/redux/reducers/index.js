import { combineReducers } from 'redux';
import seasons from './seasons';
import filterSeasons from './filterSeason';
import drivers from './drivers';
import currentSeason from './currentSeason';

const rootReducer = combineReducers({
  seasons, filterSeasons, drivers, currentSeason,
});

export default rootReducer;
