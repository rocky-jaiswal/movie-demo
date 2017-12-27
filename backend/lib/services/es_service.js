'use strict';

const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'elasticsearch:9200',
  log: 'info'
});

const findByTitle = async (title) => {
  return client.search({
    index: 'movies',
    type: 'movie',
    size: 10, // this is default anyways
    body: {
      query: {
        match: {
          title
        }
      }
    }
  });
};

module.exports = {
  findByTitle
};
