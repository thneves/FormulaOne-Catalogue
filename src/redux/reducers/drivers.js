import {
  FETCH_DRIVERS_REQUEST, FETCH_DRIVERS_SUCCESS, FETCH_DRIVERS_FAILURE,
} from '../actions';

export const initialState = {
  loading: false,
  drivers: [],
  error: '',
};

const driversReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        drivers: action.payload,
        error: '',
      };
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        loading: false,
        drivers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default driversReducers;
