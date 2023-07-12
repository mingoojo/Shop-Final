import styled from 'styled-components';
import { CartProduct } from '../../types';
import LineItemView from './LineItemView';

type OrderTableProps = {
  cartItem : CartProduct[],
  totalPrice: number
}

const Container = styled.div`
  table{
    width: 100%;
  }
  td{
    padding: 0.5rem;
  }
`;

export default function OrderTable({ cartItem, totalPrice }:OrderTableProps) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>
              제품명
            </td>
            <td>
              단가
            </td>
            <td>
              수량
            </td>
            <td>
              가격
            </td>
          </tr>
        </thead>
        <tbody>
          {
            cartItem.map((lineItem) => (
              <LineItemView key={lineItem.id} lineItem={lineItem} />
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              합계
            </td>
            <td>
              {totalPrice.toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}
