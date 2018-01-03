import { connect } from 'react-redux';

import {
  setTitleQuery,
  submitSearchQuery
} from '../../redux/app/actions';

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
      onClick={() => props.submitSearchQuery()}
    >
      Search By Name
    </button>
  </div>
);

const mapStateToProps = (state, _ownProps) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTitleQuery: (payload) => dispatch(setTitleQuery(payload)),
    submitSearchQuery: () => dispatch(submitSearchQuery())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleSearch)
