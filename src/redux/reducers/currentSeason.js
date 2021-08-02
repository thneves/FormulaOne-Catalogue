import { DISPLAY_SEASON } from '../actions';

const initialState = 0;

const currentSeason = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DISPLAY_SEASON:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default currentSeason;
