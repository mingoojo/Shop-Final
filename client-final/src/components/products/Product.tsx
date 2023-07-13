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
  .productName{
    margin-block: 1rem;
    font-weight: 500;
    line-height: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default function Product({ product }:ProductProps) {
  return (
    <Container>
      <img src={`${product.image}`} alt="Thumbnail" />
      <div className="productName">
        {product.name}
      </div>
      <div className="productPrice">
        {product.price.toLocaleString()}
        원
      </div>
    </Container>
  );
}
