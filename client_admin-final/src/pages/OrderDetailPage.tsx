import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import STATUS_MESSAGES from '../contants';
import useFetchOrder from '../hooks/useFetchOrder';

const Container = styled.div`
  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  dl {
    &::after {
      clear: left;
      display: block;
      content: "";
    }

    dt {
      clear: left;
      width: 10rem;
      margin-right: 1rem;
      text-align: right;
    }

    dt, dd {
      float: left;
      margin-block: .5rem;
    }

    span {
      margin-left: .5rem;
      font-size: 1.4rem;
    }
  }

  > a {
    display: inline-block;
    margin-block: 1rem;
  }
`;

export default function OrderDetailPage() {
  const params = useParams();

  const { order, loading, error } = useFetchOrder({
    orderId: String(params.id),
  });

  // console.log(order);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error || !order) {
    return (
      <p>Error!</p>
    );
  }

  const Order = order.orderDetail;

  return (
    <Container>
      <h2>Order Detail</h2>
      <dl>
        <dt>주문자</dt>
        <dd>{Order.receiver.name}</dd>
        <dt>상품</dt>
        <dd>
          <ul>
            {Order.cartItem.map((lineItem) => (
              <li key={lineItem.id}>
                {lineItem.name}
              </li>
            ))}
          </ul>
        </dd>
        <dt>총 가격</dt>
        <dd>
          {(Order.totalPrice).toLocaleString()}
          원
        </dd>
        <dt>배송 정보</dt>
        <dd>
          <p>
            받는 사람:
            {' '}
            {Order.receiver.name}
          </p>
          <p>
            연락처:
            {' '}
            {Order.receiver.phoneNumber}
          </p>
          <p>
            {Order.receiver.address1}
            {' '}
            {Order.receiver.address2}
            {' '}
            (우편번호:
            {' '}
            {Order.receiver.postalCode}
            )
          </p>
        </dd>
        <dt>결제 정보</dt>
        <dd>
          <p>
            주문번호:
            {' '}
            {Order.id}
          </p>
          <p>
            결제고유번호:
            {' '}
            {Order.transactionId}
          </p>
        </dd>
        <dt>상태</dt>
        <dd>{STATUS_MESSAGES[Order.status]}</dd>
      </dl>
      <p>
        <Link to={`/orders/${Order.id}/edit`}>
          상태 변경
        </Link>
        {' '}
        |
        {' '}
        <Link to="/orders">
          주문 목록
        </Link>
      </p>
    </Container>
  );
}
