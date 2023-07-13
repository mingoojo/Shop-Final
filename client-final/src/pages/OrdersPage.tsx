import { useEffect } from 'react';
import useOrdersStore from '../hooks/useOrdersStore';
import Orders from '../components/orders/Orders';

export default function OrdersPage() {
  const [{ orders }, ordersStore] = useOrdersStore();

  useEffect(() => {
    ordersStore.fetchOrders();
  }, []);
  return (
    <div>
      <h2>주문 목록</h2>
      <Orders orders={orders} />
    </div>
  );
}
