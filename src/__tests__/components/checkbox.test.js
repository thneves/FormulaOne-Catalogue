import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../../components/Checkbox/index';
import * as redux from 'react-redux';

const useSelectorMock = jest.spyOn(redux, 'useSelector');

beforeEach( () => {
  useSelectorMock.mockClear();
})

it('should render Checkbox component', () => {

  useSelectorMock.mockReturnValue([2012, 2013, 2014])
  const checkbox = renderer
    .create(
      <Checkbox checked={() => true} handleChange={() => ''} />
    )

    expect(checkbox.toJSON()).toMatchSnapshot();
})