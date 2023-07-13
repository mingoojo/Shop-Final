import styled from 'styled-components';
import { OrderDetail } from '../../types';

type OrderDetailViewProps = {
  orderDetail : OrderDetail
}

const Container = styled.div`
  ul{
    display: flex;
  }
`;

export default function OrderDetailView({ orderDetail }:OrderDetailViewProps) {
  return (
    <Container>
      <ul>
        <li>주문 코드</li>
        <li>{orderDetail.id}</li>
      </ul>
      <ul>
        <li>주문자</li>
        <li>{orderDetail.receiver.name}</li>
      </ul>
    </Container>
  );
}
