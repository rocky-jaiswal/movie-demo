import Layout from '../components/Layout';
import TitleSearch from '../components/TitleSearch';
import MovieList from '../components/MovieList';

import { withReduxSaga } from '../store';

class Index extends React.Component {

  render () {
    return(
      <Layout>
        <TitleSearch />
        <MovieList />
      </Layout>
    );
  }

}

export default withReduxSaga(Index);


