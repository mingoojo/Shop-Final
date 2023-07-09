import styled from 'styled-components';
import { Cart } from '../../types';

type OrderFormProps = {
  cart: Cart
}

const Container = styled.div`
  h2 {
    font-size: 4rem;
  }
`;

export default function OrderForm({ cart }:OrderFormProps) {
  return (
    <Container>
      OrderForm
    </Container>
  );
}
