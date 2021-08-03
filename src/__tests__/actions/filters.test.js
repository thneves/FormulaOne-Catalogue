import configureMockStore from 'redux-mock-store';
import { addFilter, removeFilter, resetFilter } from '../../redux/actions';

const mockStore = configureMockStore();
const store = mockStore({});

describe('actions creation', () => {
  it('should add a filter', () => {
    store.dispatch(addFilter(
      {
        season: 2012
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  })

  it('should remove a filter', () => {
    store.dispatch(removeFilter(
      {
        season: [2012,2013]
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  })

  it('should reset filters', () => {
    store.dispatch(resetFilter(
      {
        season: []
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  })
})