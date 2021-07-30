import { FETCH_SEASONS_FAILURE, FETCH_SEASONS_SUCCESS, FETCH_SEASONS_REQUEST } from '../actions/index';

const initialState = {
  loading: false,
  data: [],
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
        data: action.payload,
        error: '',
      };
    case FETCH_SEASONS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default seasonsReducer;
