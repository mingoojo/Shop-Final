import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';
import useOrderDetailStore from '../hooks/useOrderDetailStore';
import OrderDetailView from '../components/orderDetail/OrderDetailView';

const Container = styled.div`

`;

export default function OrderDetailPage() {
  const [, orderDetailStore] = useOrderDetailStore();
  const params = useParams();

  useEffect(() => {
    orderDetailStore.fetchOrderDetail({ orderId: String(params.id) });
  }, []);

  return (
    <Container>
      <h1>주문상세</h1>
      <OrderDetailView />
    </Container>
  );
}
