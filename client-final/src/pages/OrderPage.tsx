import { useEffect } from 'react';
import useCartStore from '../hooks/useCartStore';
import OrderView from '../components/order/OrderView';

export default function OrderPage() {
  const [, cartStore] = useCartStore();

  useEffect(() => {
    cartStore.fetchCart();
  }, []);
  return (
    <OrderView />
  );
}
