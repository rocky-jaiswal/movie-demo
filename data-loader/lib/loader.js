const FS   = require('fs');
const Util = require('util');
const elasticsearch = require('elasticsearch');
const parse = require('csv-parse');

const client = new elasticsearch.Client({
  host: 'elasticsearch:9200',
  log: 'info'
});

const deleteIndex = async () => {
  return await client.indices.delete({ index: 'movies' });
};

const createIndex = async () => {
  return await client.indices.create({
    index: 'movies',
    body: {
      settings : {
        index : {
            number_of_shards : 1,
            number_of_replicas : 1
        }
      },
      mappings: {
        movie: {
          _all: { enabled: false },
          properties: {
            title: {
              type: 'text',
              analyzer: 'english',
              fields: {
                raw: {
                  type: 'text',
                  index: false
                }
              }
            },
            year:    { type: 'integer' },
            genres:  { type: 'text', analyzer: 'english' },
            imdbId:  { type: 'long' },
            tmdbId:  { type: 'long' },
            tags:    { type: 'text', analyzer: 'english'},
            ratings: { type: 'integer' }
          }
        }
      }
    }
  });
};

const insertMovies = async () => {
  const readFile = Util.promisify(FS.readFile);

  const moviesFile = await readFile(`${__dirname}/../csvdata/movies.csv`);
  const linksFile = await readFile(`${__dirname}/../csvdata/links.csv`);

  const parseCSV = Util.promisify(parse);

  const movies = await parseCSV(moviesFile, { columns: true });
  const links = await parseCSV(linksFile);

  const withDetails = movies.map((m) => {

    const ids = links.find((l) => l[0] === m.movieId);
    const titleAndYear = m.title;
    return ({
      id: m.movieId,
      title: titleAndYear.substr(0, titleAndYear.length - 7),
      year: parseInt(titleAndYear.substr(-5, 4)),
      genres: m.genres.split('|'),
      imdbId: ids[1],
      tmdbId: ids[2]
    })
  });

  const records = withDetails.reduce((agg, m) => {

    agg.push({ index: { _index: 'movies', _type: 'movie', _id: m.id } });
    agg.push(m);
    return agg;
  }, []);

  return await client.bulk({ body: records });
}

module.exports = {
  deleteIndex,
  createIndex,
  insertMovies
}
