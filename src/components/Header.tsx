import styled from 'styled-components';

const Container = styled.header`
  height: 100%;
  padding: 12px;
  background-color: blue;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
};

export default Header;
