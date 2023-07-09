import styled from 'styled-components';
import { ProductDetail } from '../../types';
import AddToCartForm from './AddToCartForm';
import Description from './Description';
import Images from './Images';

type ProductDetailViewProps ={
  product : ProductDetail
}

const Container = styled.div`
  display:flex;
  justify-content: space-between;
  aside{
    width: 38%;
  }
  article{
    width: 60%;
  }
`;

export default function ProductDetailView({ product }:ProductDetailViewProps) {
  return (
    <Container>
      <aside>
        <Images images={product.images} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}
