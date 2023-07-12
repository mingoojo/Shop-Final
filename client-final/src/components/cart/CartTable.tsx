import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartProduct } from '../../types';
import LineItemView from './LineItemView';
import Button from '../ui/Button';

type CartTableProps = {
  cartItem : CartProduct[]
}

const Container = styled.div`
  table{
    width: 100%;
  }
  td{
    padding: 0.5rem;
  }
`;

export default function CartTable({ cartItem }:CartTableProps) {
  const navigate = useNavigate();
  const totalPrice = cartItem.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const handleClick = () => {
    navigate('/order');
  };
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
      <Button label="주문하기" onClick={handleClick} />
    </Container>
  );
}
