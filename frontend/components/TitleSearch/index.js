import Head from 'next/head';
import { classNames, stylesheet } from './styles.css';

export default () => (
  <div className={classNames.titleSearch}>
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <input type="text" id="title-text" placeholder="Movie name ..." />
    <button
      className={classNames['big-green-button']}
    >
      Search By Name
    </button>
  </div>
);
