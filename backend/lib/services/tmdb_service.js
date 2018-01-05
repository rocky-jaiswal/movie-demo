'use strict';

const Axios = require('axios');

const apiKey = process.env['TMDB_KEY'];

const fetchTMDBDetails = (movies) => {

  const promises = movies.map((m) => Axios.get(`https://api.themoviedb.org/3/movie/${m.tmdbId}?language=en-US&api_key=${apiKey}`));
  return Promise.all(promises);
};

module.exports = {
  fetchTMDBDetails
};
