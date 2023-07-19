import styled from 'styled-components';
import { OrderDetail } from '../../types';
import DestinationInfomation from './DestinationInfomation';
import OrderInfomation from './OrderInfomation';

type OrderDetailProps = {
  orderDetail : OrderDetail
}
const Container = styled.div`

`;

export default function OrderDetail({ orderDetail }:OrderDetailProps) {
  return (
    <Container>
      <DestinationInfomation receiver={orderDetail.receiver} />
      <OrderInfomation orderDetail={orderDetail} />
    </Container>
  );
}
