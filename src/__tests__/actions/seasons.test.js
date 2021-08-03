import configureMockStore from 'redux-mock-store';
import { fetchSeasonsRequest, fetchSeasonsSuccess, fetchSeasonssFailure } from '../../redux/actions';

const mockStore = configureMockStore();
const store = mockStore({});

describe('actions on seasons list', () => {
  it('should request the Seasons ranking', () => {
    store.dispatch(fetchSeasonsRequest(
      {
        loading: true,
        seasons: {},
        error: '',
      },
    ));
  });
});
