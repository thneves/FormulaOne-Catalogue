import React from 'react';
import renderer from 'react-test-renderer';
import FilterOptions from '../../components/FilterOptions';
import * as redux from 'react-redux';

const useSelectorMock = jest.spyOn(redux, 'useSelector');

beforeEach( () => {
  useSelectorMock.mockClear();
})

it('should render filter options component', () => {
  useSelectorMock.mockReturnValue([2012, 2013, 2014]);

  const filter = renderer
    .create(
      <FilterOptions isChecked={() => true} handleChange={() => ''}/>
    )

  expect(filter.toJSON()).toMatchSnapshot();
});
