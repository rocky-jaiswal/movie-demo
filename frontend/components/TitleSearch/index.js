import { connect } from 'react-redux';

import { setTitleQuery } from '../../redux/app/actions';

import Head from 'next/head';
import { classNames, stylesheet } from './styles.css';

const TitleSearch = (props) => (
  <div className={classNames.titleSearch}>
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <input
      type="text"
      id="title-text"
      placeholder="Movie name ..."
      onChange={(e) => props.setTitleQuery(e.target.value)} />
    <button
      className={classNames['big-green-button']}
    >
      Search By Name
    </button>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitleQuery: (payload) => dispatch(setTitleQuery(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleSearch)
