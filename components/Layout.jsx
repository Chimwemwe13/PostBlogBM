import React from 'react';
import {Header} from '.';
//childern is the special prop
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
