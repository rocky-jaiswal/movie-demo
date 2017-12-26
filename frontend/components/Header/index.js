import Head from 'next/head';
import { classNames, stylesheet } from './styles.css';

export default () => (
  <div className={classNames.header}>
    <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>
  </div>
);
