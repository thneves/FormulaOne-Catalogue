import configureMockStore from 'redux-mock-store';
import { fetchSeasonsRequest, fetchSeasonsSuccess, fetchSeasonsFailure } from '../../redux/actions';

const mockStore = configureMockStore();
const store = mockStore({});

  it('should request the Seasons ranking', () => {
    store.dispatch(fetchSeasonsRequest(
      {
        loading: true,
        seasons: {},
        error: '',
      }),
    );
    expect(store.getActions()).toMatchSnapshot();
  });

  it('should fetch seasons with success', () => {
    store.dispatch(
      fetchSeasonsSuccess({
        loading: false,
        seasons: {
          seasons: [2012, 2013]
        },
        error: '',
      })
    );
      expect(store.getActions()).toMatchSnapshot();
  });
  
  
  it('should fetch seasons with failure', () => {
    store.dispatch(
      fetchSeasonsFailure({
        loading: false,
        seasons: {},
        error: 'some error',
      })
    );
    expect(store.getActions()).toMatchSnapshot();
  });

