import Head from 'next/head';
import { connect } from 'react-redux';

import { classNames, stylesheet } from './styles.css';

class MovieList extends React.Component {

  renderPoster(movie) {
    if (movie && movie.poster_path) {
      return <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />;
    }
    return <span />;
  }

  renderDescription(movie) {
    if (movie && movie.overview) {
      return <div>{movie.overview}</div>;
    }
    return <span />;
  }

  renderMovies() {
    return (
      <div className={classNames.movieList}>
        {this.props.movies.map((m) => {
          return (
            <div className={classNames.movie} key={m.id}>
              <p>{m.title || m.original_title}</p>
              { this.renderPoster(m) }
              { this.renderDescription(m) }
            </div>
          );
        })}
      </div>
    );
  }

  render () {
    return (
      <div className={classNames.movieListContainer}>
        <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
        { this.props.movies.length === 0 ? <span/> : this.renderMovies() }
      </div>
    );
  }

}

const mapStateToProps = (state, _ownProps) => {
  return {
    movies: state.app.movies
  };
};

const mapDispatchToProps = (_dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
