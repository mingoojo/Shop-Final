import { Link } from 'react-router-dom';
import { CartProduct } from '../../types';

type LineItemViewProps = {
  lineItem: CartProduct
}

export default function LineItemView({ lineItem }:LineItemViewProps) {
  return (
    <tr>
      <td>
        <Link to={`/products/${lineItem.productId}`}>
          {lineItem.name}
        </Link>
      </td>
      <td>
        {(lineItem.unitPrice).toLocaleString()}
        원
      </td>
      <td>
        {lineItem.quantity}
        개
      </td>
      <td>
        {(lineItem.totalPrice).toLocaleString()}
        원
      </td>
    </tr>
  );
}
