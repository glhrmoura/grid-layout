import styled from 'styled-components';

const Container = styled.aside`
  height: 100%;
  padding: 12px;
  font-size: 32px;
  font-weight: 700;
  background-color: #e1be49;
`;

const SideMenu: React.FC = () => {
  return (
    <Container>
      SideMenu
    </Container>
  );
};

export default SideMenu;
