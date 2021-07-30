import { combineReducers } from 'redux';
import seasons from './seasons';
import filterSeasons from './filterSeason';
import drivers from './drivers';

const rootReducer = combineReducers({ seasons, filterSeasons, drivers });

export default rootReducer;
