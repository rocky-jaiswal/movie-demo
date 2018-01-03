import Head from 'next/head';
import { connect } from 'react-redux';

import { classNames, stylesheet } from './styles.css';

class MovieList extends React.Component {

  renderMovies() {
    return (
      <div className={classNames.movieList}>
        {this.props.movies.map((m) => {
          return (
            <div className={classNames.movie} key={m.id}>
              <p>{m.title}</p>
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
