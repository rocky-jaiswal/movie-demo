import * as React from 'react';

import './styles.css';

interface IProps {
  children?: React.ReactElement<{}>;
}

const Layout: React.SFC<IProps> = (props: IProps) => {

  return (
    <div className={'container'}>
      <div>
        {React.Children.toArray(props.children)}
      </div>
    </div>
  );

};

export default Layout;
