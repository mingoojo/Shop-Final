import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';

const Container = styled.div`
  
`;

export default function Price() {
  const [{ price }] = useProductFormStore();
  return (
    <Container>
      {price.toLocaleString()}
      원
    </Container>
  );
}
