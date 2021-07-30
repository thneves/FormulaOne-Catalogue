import { combineReducers } from 'redux';
import seasons from './seasons';
import filterSeasons from './filterSeason';

const rootReducer = combineReducers({ seasons, filterSeasons });

export default rootReducer;
