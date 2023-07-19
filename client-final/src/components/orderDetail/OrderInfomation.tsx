import styled from 'styled-components';
import { OrderDetail } from '../../types';
import OrderedItem from './OrderedItem';

type OrderInfomationProps = {
  orderDetail : OrderDetail
}

const Container = styled.div`
padding-block: 1rem;
margin-block: 1rem;
border-bottom: 1px solid #222;
  .orderHeader{
    h1{
    font-weight: bold;
  }
  margin-bottom: 2rem;
  }
`;

export default function OrderInfomation({ orderDetail }:OrderInfomationProps) {
  return (
    <Container>
      <div className="orderHeader">
        <h1>
          주문 정보
        </h1>
      </div>
      <div>
        {
          orderDetail.cartItem.map((Item) => (
            <OrderedItem item={Item} key={Item.id} />
          ))
        }
      </div>
    </Container>
  );
}
