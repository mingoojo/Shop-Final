import styled from 'styled-components';
import { OrderSummary } from '../../types';

type OrderProps = {
  order : OrderSummary
}

const Container = styled.div`
  line-height: 1.5;
  margin-block: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.backgroundThird};
`;

export default function Order({ order }:OrderProps) {
  return (
    <Container>
      <div>
        주문 일시:
        {' '}
        {order.orderedAt}
      </div>
      <div>
        주문 코드:
        {' '}
        {order.id}
      </div>
      <div>
        상품:
        {' '}
        {order.title}
      </div>
      <div>
        결제 금액:
        {' '}
        {(order.totalPrice).toLocaleString()}
        원
      </div>
    </Container>
  );
}
