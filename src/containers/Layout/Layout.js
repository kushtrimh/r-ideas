import React from 'react';

import SideBar from '../../components/SideBar/SideBar';

const Layout = (props) => {
  return (
    <React.Fragment>
      <SideBar />
      {props.children}
    </React.Fragment>
  )
};

export default Layout;