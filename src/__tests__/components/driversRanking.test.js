import React from 'react';
import renderer from 'react-test-renderer';
import DriversRanking from '../../components/DriversRanking';

const driver = {
  name: 'John Doe',
  image: 'driver image',
  position: 1,
  points: 999,
  wins: 10,
  teamLogo: 'team logo image',

};

it('Renders Drivers Ranking', () => {
  const ranking = renderer
    .create(
      <DriversRanking
        position={driver.position}
        driver={driver.name}
        driverImg={driver.image}
        points={driver.points}
        wins={driver.wins}
        teamLogo={driver.teamLogo}
      />,
    )
    .toJSON();

  expect(ranking).toMatchSnapshot();
});
