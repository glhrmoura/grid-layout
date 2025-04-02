import React from 'react';

import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout';
import Header from './components/Header';
import Content from './components/Content';
import SideMenu from './components/SideMenu';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    color: #FFFFFF;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout header={<Header />} sideMenu={<SideMenu />} content={<Content />} />
    </>
  );
}

export default App;
