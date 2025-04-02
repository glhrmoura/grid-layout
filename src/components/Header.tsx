import styled from 'styled-components';

const Container = styled.header`
  height: 100%;
  padding: 12px;
  font-size: 32px;
  font-weight: 700;
  background-color: #EF5451;
`;

const Header: React.FC = () => {
  return (
    <Container>
      Header
    </Container>
  );
};

export default Header;
