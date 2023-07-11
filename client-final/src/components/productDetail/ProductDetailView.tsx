import { useEffect } from 'react';
import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import { ProductDetail } from '../../types';
import AddToCartForm from './AddToCartForm';
import Description from './Description';
import Image from './Image';

type ProductDetailViewProps = {
  productDetail : ProductDetail
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

export default function ProductDetailView({ productDetail }:ProductDetailViewProps) {
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    productFormStore.setProduct(productDetail);
  }, []);

  return (
    <Container>
      <aside>
        <Image image={productDetail.image} />
      </aside>
      <article>
        <h2>{productDetail.name}</h2>
        <AddToCartForm />
        <Description value={productDetail.description} />
      </article>
    </Container>
  );
}
