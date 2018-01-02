import Layout from '../components/Layout';
import TitleSearch from '../components/TitleSearch';

import { withReduxSaga } from '../store';

class Index extends React.Component {

  render () {
    return(
      <Layout>
        <TitleSearch />
      </Layout>
    );
  }

}

export default withReduxSaga(Index);


