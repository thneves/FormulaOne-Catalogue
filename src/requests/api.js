import axios from 'axios';
import * as options from './optionsTypes';

const getSeasons = async () => {
  const response = await axios.request(options.seasons);
  if (response.status === 200) {
    const seasons = response.data.response;
    return seasons;
  }
  throw Error(response.status);
};

const getDrivers = async season => {
  const response = await axios.request(options.rankings(season));
  if (response.status === 200) {
    const drivers = response.data.response;
    return drivers;
  }
  throw Error(response.status);
};

const getTeamInfo = async team => {
  const response = await axios.request(options.teamInfo(team));
  if (response.status === 200) {
    const team = response.data.response;
    console.log(team);
    return team;
  }
  throw Error(response.status);
};

const getDriverInfo = async driver => {
  const response = await axios.request(options.driverInfo(driver));
  if (response.status === 200) {
    const driver = response.data.response;
    console.log(driver);
    return driver;
  }
  throw Error(response.status);
};

export {
  getSeasons, getDrivers, getTeamInfo, getDriverInfo,
};
