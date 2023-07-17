import { useEffect } from 'react';
import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import { ProductDetail } from '../../types';
import AddToCartForm from './AddToCartForm';
import Description from './Description';
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
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(product);
  }, []);

  return (
    <Container>
      <aside>
        <Image image={product.image} />
      </aside>
      <article>
        <h2>{product.name}</h2>
        <AddToCartForm />
        <Description value={product.description} />
      </article>
    </Container>
  );
}
