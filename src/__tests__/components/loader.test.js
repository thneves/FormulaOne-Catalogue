import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loader';

it('Renders Loader', () => {
  const loader = renderer
    .create(
      <Loader />,
    )
    .toJSON();

  expect(loader).toMatchSnapshot();
});