import styled from 'styled-components';
import { CartProductSum } from '../../types';

type OrderedItemProps ={
  item : CartProductSum
}

const Container = styled.div`
display: flex;
line-height: 1.5;
padding: 1rem;
border: 1px solid #222;
margin-block: 1rem;
  .ItemKey{
    width: 20%;
  }
`;

export default function OrderedItem({ item }:OrderedItemProps) {
  return (
    <Container>
      <div className="ItemKey">
        <p>
          주문 상품
        </p>
        <p>
          총 가격
        </p>
      </div>
      <div className="ItemValue">
        <p>
          {item.name}
        </p>
        <p>
          {item.totalPrice.toLocaleString()}
          원
        </p>
      </div>
    </Container>
  );
}
