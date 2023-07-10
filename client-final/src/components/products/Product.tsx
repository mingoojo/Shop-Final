import styled from 'styled-components';
import { ProductSummary } from '../../types';

type ProductProps = {
  product : ProductSummary
}

const Thumbnail = styled.img.attrs({
  alt: 'Thumbnail',
})`
display: block;
width: 100%;
aspect-ratio: 1/1;
`;

export default function Product({ product }:ProductProps) {
  return (
    <div>
      <Thumbnail src={`${product.image}`} />
      <div>
        {product.name}
      </div>
      <div>
        {product.price.toLocaleString()}
        원
      </div>
    </div>
  );
}
