import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  padding: 12px;
  font-size: 32px;
  font-weight: 700;
  background-color: red;
`;

const Content: React.FC = () => {
  return (
    <Container>
      Content
    </Container>
  );
};

export default Content;
