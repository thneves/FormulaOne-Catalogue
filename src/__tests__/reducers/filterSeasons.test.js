import filterSeasonReducer from '../../redux/reducers/filterSeason';

describe('Filter Seasons Reducer', () => {
  it('should return initial state', () => {
    expect(filterSeasonReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle add a new filter', () => {
    expect(filterSeasonReducer([],
      {
        type: 'ADD_FILTER',
      })).toMatchSnapshot();
  });

  it('should handle remove filters', () => {
    expect(filterSeasonReducer([],
      {
        type: 'REMOVE_FILTER',
      })).toMatchSnapshot();
  });

  it('should handle reset filter', () => {
    expect(filterSeasonReducer([],
      {
        type: 'RESET_FILTER',
      })).toMatchSnapshot();
  });
});
