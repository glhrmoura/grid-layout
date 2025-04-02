import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas: 
    "header header"
    "sideMenu content";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 80px;

    grid-template-areas: 
      "header"
      "content";
  }
`;

const Area1 = styled.div`
  grid-area: header;
`;

const Area2 = styled.div`
  grid-area: sideMenu;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Area3 = styled.div`
  grid-area: content;
`;

const Layout = ({ header, sideMenu, content }) => {
  return (
    <Container>
      <Area1>{header}</Area1>
      <Area2>{sideMenu}</Area2>
      <Area3>{content}</Area3>
    </Container>
  );
};

export default Layout;
