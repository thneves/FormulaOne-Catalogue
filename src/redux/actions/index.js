export const FETCH_SEASONS_REQUEST = 'FETCH_SEASONS_REQUEST';
export const FETCH_SEASONS_SUCCESS = 'FETCH_SEASONS_SUCCESS';
export const FETCH_SEASONS_FAILURE = 'FETCH_SEASONS_FAILURE';

export const fetchSeasonsRequest = () => ({ type: FETCH_SEASONS_REQUEST });
export const fetchSeasonsSuccess = seasons => ({ type: FETCH_SEASONS_SUCCESS, payload: seasons });
export const fetchSeasonsFailure = error => ({ type: FETCH_SEASONS_FAILURE, payload: error });
