import { DISPLAY_SEASON } from '../actions';

const initialState = 0;

const currentSeason = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_SEASON:
      return state + action.payload;
    default:
      return state;
  }
};

export default currentSeason;
