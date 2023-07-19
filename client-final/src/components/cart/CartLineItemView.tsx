import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartProduct } from '../../types';

type CartLineItemViewProps = {
  lineItem : CartProduct
}

const Container = styled.tr`
  .item{
    text-align: end;
  }

  td{
    .option{
      font-size: 1.3rem;
      padding-block: .5rem;
      display: block;
    }
  }
`;

export default function CartLineItemView({ lineItem }:CartLineItemViewProps) {
  return (
    <Container>
      <td>
        <span>
          <Link to={`/products/${lineItem.productId}`}>
            {lineItem.name}
          </Link>
        </span>
        <span className="option">
          {
            lineItem.options.map((option) => (
              `${option.kind}: ${option.items.name}`
            )).join(' / ')
          }
        </span>
      </td>
      <td className="item">
        {lineItem.unitPrice.toLocaleString()}
        원
      </td>
      <td className="item">
        {lineItem.quantity}
        개
      </td>
      <td className="item">
        {lineItem.totalPrice.toLocaleString()}
        원
      </td>
    </Container>
  );
}
