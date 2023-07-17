import styled from 'styled-components';
import { ProductDetail } from '../../types';
import Image from './Image';

type ProductDetailViewProps = {
  product: ProductDetail
}

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  aside{
    width: 38%;
  }
  article{
    width: 60%;
    h2{
      font-weight: bold;
    }
  }
`;

export default function ProductDetailView({ product }:ProductDetailViewProps) {
  return (
    <Container>
      <aside>
        <Image image={product.image} />
      </aside>
      <article>
        <h2>{product.name}</h2>
      </article>
      ProductDetailView
    </Container>
  );
}
