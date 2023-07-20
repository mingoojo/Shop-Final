import { useEffect } from 'react';
import styled from 'styled-components';
import useOrderListStore from '../hooks/useOrderListStore';
import OrderListView from '../components/orderList/OrderListView';

const Container = styled.div`

`;

export default function OrderListPage() {
  const [, orderListStore] = useOrderListStore();

  // 오더리스트 정보 얻기
  useEffect(() => {
    orderListStore.fetechOrders();
  }, []);

  return (
    <Container>
      <h1>주문목록</h1>
      <OrderListView />
    </Container>
  );
}
