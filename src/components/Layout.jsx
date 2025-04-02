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

const Header = styled.div`
  grid-area: header;
`;

const Content = styled.div`
  grid-area: content;
`;

const SideMenu = styled.div`
  grid-area: sideMenu;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Layout = ({ header, sideMenu, content }) => {
  return (
    <Container>
      <Header>{header}</Header>
      <SideMenu>{sideMenu}</SideMenu>
      <Content>{content}</Content>
    </Container>
  );
};

export default Layout;
