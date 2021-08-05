import { FETCH_SEASONS_FAILURE, FETCH_SEASONS_SUCCESS, FETCH_SEASONS_REQUEST } from '../actions/index';

export const initialState = {
  loading: false,
  seasons: [],
  error: '',
};

const seasonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEASONS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SEASONS_SUCCESS:
      return {
        ...state,
        loading: false,
        seasons: action.payload,
        error: '',
      };
    case FETCH_SEASONS_FAILURE:
      return {
        ...state,
        loading: false,
        seasons: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seasonsReducer;
