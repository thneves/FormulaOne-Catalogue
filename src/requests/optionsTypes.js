const seasons = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/seasons',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};

const teamsRankings = season => ({
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/rankings/teams',
  params: { season },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  }
})

const driversRankings = season => ({
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
  params: { season },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
});

const teamInfo = team => ({
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/teams',
  params: { id: team },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
});

const driverInfo = driver => ({
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/drivers',
  params: { id: driver },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
});

export {
  seasons, driversRankings, teamInfo, driverInfo, teamsRankings
};
