import currentSeason, { initialState } from '../../redux/reducers/currentSeason';

describe('Current Season Reducer', () => {
  it('should return initial state', () => {
    expect(currentSeason(undefined, {})).toMatchSnapshot();
  });

  it('should handle the displayed season', () => {
    expect(currentSeason(initialState,
      {
        type: 'DISPLAY_SEASON',
      })).toMatchSnapshot();
  });
});
