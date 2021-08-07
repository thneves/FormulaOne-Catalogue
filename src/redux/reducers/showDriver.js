import { FETCH_DRIVER_REQUEST, FETCH_DRIVER_SUCCESS, FETCH_DRIVER_FAILURE } from '../actions';

const initialState = {
  loading: false,
  driver: [],
  error: '',
};

const driverInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVER_REQUEST:
      return { ...state, loading: true };
    case FETCH_DRIVER_SUCCESS:
      return {
        ...state,
        loading: false,
        driver: action.payload,
        error: '',
      };
    case FETCH_DRIVER_FAILURE:
      return {
        ...state,
        loading: false,
        driver: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default driverInfoReducer;
