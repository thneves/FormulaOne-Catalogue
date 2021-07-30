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

export default getSeasons;
