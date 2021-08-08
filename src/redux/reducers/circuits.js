import { FETCH_CIRCUITS_FAILURE, FETCH_CIRCUITS_REQUEST, FETCH_CIRCUITS_SUCCESS } from '../actions/index';

const initialState = {
  loading: false,
  circuits: [],
  error: '',
};

const circuitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CIRCUITS_REQUEST:
      return { ...state, loading: true };
    case FETCH_CIRCUITS_SUCCESS:
      return {
        ...state,
        loading: false,
        circuits: action.payload,
        error: '',
      };
    case FETCH_CIRCUITS_FAILURE:
      return {
        ...state,
        loading: false,
        circuits: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default circuitsReducer;
