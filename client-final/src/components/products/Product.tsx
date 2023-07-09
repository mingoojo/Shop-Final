import styled from 'styled-components';
import { ProductSummary } from '../../types';

type ProductProps = {
  product : ProductSummary
}

const Container = styled.div`
  img{
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
  }
`;

export default function Product({ product }:ProductProps) {
  return (
    <Container>
      <img src={`${product.thumbnail.url}`} alt="Thumbnail" />
      <div>
        {product.name}
      </div>
      <div>
        {product.price.toLocaleString()}
        원
      </div>
    </Container>
  );
}
