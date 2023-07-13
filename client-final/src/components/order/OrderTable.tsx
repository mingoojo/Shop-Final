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

export default function OrderTable({ cartItem, totalPrice }:OrderTableProps) {
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
