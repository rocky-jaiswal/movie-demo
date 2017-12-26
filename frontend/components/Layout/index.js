import Head from 'next/head';

import Header from '../Header';
import { classNames, stylesheet } from './styles.css';

export default ({ children }) => (
  <div className={classNames.container}>
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
    <Header />
    <div className={classNames.main}>
      {children}
    </div>
  </div>
);
