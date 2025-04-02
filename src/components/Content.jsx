import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  padding: 12px;
  background-color: red;
`;

const Content = () => {
  return (
    <Container>
      <h1>Content</h1>
    </Container>
  );
};

export default Content;