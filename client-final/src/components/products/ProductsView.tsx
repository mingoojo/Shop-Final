import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductSummary } from '../../types';
import Product from './Product';

type ProductsViewProps = {
  products : ProductSummary[]
}

const Container = styled.div`
  h1{
    font-weight: bold;
    font-size: 2rem;
  }
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  li{
    width: 20%;
    padding: 1rem;
  }
  a{
    display: block;
    text-decoration: none;
  }
`;

export default function ProductsView({ products }:ProductsViewProps) {
  return (
    <Container>
      <h1>상품보기</h1>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Product product={product} />
              </Link>
            </li>
          ))
        }
      </ul>
    </Container>
  );
}
