import {
    FETCH_TEAMS_SUCCESS, FETCH_TEAMS_REQUEST, FETCH_TEAMS_FAILURE
} from '../actions';

export const initialState = {
    loading: false,
    teams: [],
    error: '',
};

const teamsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TEAMS_REQUEST:
      return { ...state, loading: true}
    case FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        driver: action.payload,
        error: '',
      }
    case FETCH_TEAMS_FAILURE:
      return {
        ...state,
        loading: false,
        drivers: [],
        error: action.payload
      }
    default:
      return state;
  }
};

export default teamsReducer;