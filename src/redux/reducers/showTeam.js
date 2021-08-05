import { SHOW_TEAM_INFO } from '../actions';

const teamInfoReducer = (state = '', action) => {
  let newState;
  switch (action.type) {
    case SHOW_TEAM_INFO:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default teamInfoReducer;
