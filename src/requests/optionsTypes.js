const seasons = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/seasons',
  headers: {
    'x-rapidapi-key': '2f176338d0msh940dc82bde5d518p1dd3b0jsnc5b9fdce8168',
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};

const rankings = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/rankings/drivers',
  params: { season: '2019' },
  headers: {
    'x-rapidapi-key': '2f176338d0msh940dc82bde5d518p1dd3b0jsnc5b9fdce8168',
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};

export { seasons, rankings };
