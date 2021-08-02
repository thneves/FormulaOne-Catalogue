import configureMockStore from 'redux-mock-store';
import { displaySeason } from '../../redux/actions';

const mockStore = configureMockStore();
const store = mockStore({});

describe('actions creation', () => {
  it('should display the current season year', () => {
    store.dispatch(displaySeason(
      {
        season: 2012
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  })
})
