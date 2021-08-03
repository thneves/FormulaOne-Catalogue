import drivers, { initialState } from '../../redux/reducers/drivers';

describe('Drivers Ranking Reducer', () => {
  it('should return the initial state', () => {
    expect(drivers(undefined, {})).toMatchSnapshot();
  });

  it('should handle Fetch Drivers Request', () => {
    expect(drivers(initialState,
      {
        type: 'FETCH_DRIVERS_REQUEST',
      })).toMatchSnapshot();
  });

  it('should handle Fetch Drivers Sucess', () => {
    expect(drivers(initialState,
      {
        type: 'FETCH_DRIVERS_SUCCESS',
      })).toMatchSnapshot();
  });

  it('should handle Fetch Drivers Failure', () => {
    expect(drivers(initialState,
      {
        type: 'FETCH_DRIVERS_FAILURE',
      })).toMatchSnapshot();
  });
});
