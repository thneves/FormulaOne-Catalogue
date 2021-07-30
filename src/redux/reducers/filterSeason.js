import { ADD_FILTER, REMOVE_FILTER, RESET_FILTER } from '../actions/index';

const filterSeasonReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.payload];
    case REMOVE_FILTER:
      return state.filter(year => year !== action.payload);
    case RESET_FILTER:
      return [];
    default:
      return state;
  }
};

export default filterSeasonReducer;
