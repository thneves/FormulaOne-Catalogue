import { FETCH_TEAM_REQUEST, FETCH_TEAM_SUCCESS, FETCH_TEAM_FAILURE } from '../actions';

const initialState = {
  loading: false,
  team: [],
  error: '',
};

const teamInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return { ...state, loading: true };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        team: action.payload,
      };
    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        loading: false,
        team: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default teamInfoReducer;
