import styled from 'styled-components';

const Container = styled.aside`
  height: 100%;
  padding: 12px;
  background-color: green;
`;

const SideMenu: React.FC = () => {
  return (
    <Container>
      <h1>SideMenu</h1>
    </Container>
  );
};

export default SideMenu;
