import styled from 'styled-components';
import { CartProduct } from '../../types';
import OrderLineItemView from './OrderLineItemView';

type OrderTableProps = {
  cart: CartProduct[]
  totalPrice : number
}

const Container = styled.div`
  table{
    width: 100%;
    tr{
      td{
        padding: 0.5rem;
      }
      .item{
        text-align: end;
      }
    }
  }

`;

export default function OrderTable({ cart, totalPrice }: OrderTableProps) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>
              제품명
            </td>
            <td className="item">
              단가
            </td>
            <td className="item">
              수량
            </td>
            <td className="item">
              가격
            </td>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((lineItem) => (
              <OrderLineItemView key={lineItem.id} lineItem={lineItem} />
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              합계
            </td>
            <td className="item">
              {totalPrice.toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}
