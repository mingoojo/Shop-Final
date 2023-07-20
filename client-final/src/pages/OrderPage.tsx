import { useEffect } from 'react';
import useCartStore from '../hooks/useCartStore';
import OrderView from '../components/order/OrderView';

export default function OrderPage() {
  const [, cartStore] = useCartStore();

  // 카트 정보 얻기
  useEffect(() => {
    cartStore.fetchCart();
  }, []);

  return (
    <OrderView />
  );
}
