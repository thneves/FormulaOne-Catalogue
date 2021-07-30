export const FETCH_SEASONS_REQUEST = 'FETCH_SEASONS_REQUEST';
export const FETCH_SEASONS_SUCCESS = 'FETCH_SEASONS_SUCCESS';
export const FETCH_SEASONS_FAILURE = 'FETCH_SEASONS_FAILURE';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const RESET_FILTER = 'RESET_FILTER';

export const fetchSeasonsRequest = () => ({ type: FETCH_SEASONS_REQUEST });
export const fetchSeasonsSuccess = seasons => ({ type: FETCH_SEASONS_SUCCESS, payload: seasons });
export const fetchSeasonsFailure = error => ({ type: FETCH_SEASONS_FAILURE, payload: error });
export const addFilter = filter => ({ type: ADD_FILTER, payload: filter });
export const removeFilter = filter => ({ type: REMOVE_FILTER, payload: filter });
export const resetFilter = filter => ({ type: RESET_FILTER, payload: filter });
