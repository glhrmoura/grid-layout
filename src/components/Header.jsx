import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  height: 100%;
  background-color: blue;
`;

const Header = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;