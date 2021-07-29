const options = {
  method: 'GET',
  url: 'https://api-formula-1.p.rapidapi.com/seasons',
  headers: {
    'x-rapidapi-key': '2f176338d0msh940dc82bde5d518p1dd3b0jsnc5b9fdce8168',
    'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
  },
};

async function getRequest() {
  try {
    const result = await axios.request(options);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
