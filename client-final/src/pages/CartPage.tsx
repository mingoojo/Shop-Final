import { useEffect } from 'react';
import styled from 'styled-components';
import useCartStore from '../hooks/useCartStore';
import CartView from '../components/cart/CartView';

const Container = styled.div`

`;

export default function CartPage() {
  const [, cartStore] = useCartStore();

  useEffect(() => {
    cartStore.fetchCart();
  }, []);

  return (
    <Container>
      <h1>장바구니</h1>
      <CartView />
    </Container>
  );
}
