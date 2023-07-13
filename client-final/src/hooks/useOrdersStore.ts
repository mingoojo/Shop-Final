import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrdersStore from '../stores/OrdersStore';

export default function useOrdersStore() {
  const store = container.resolve(OrdersStore);
  return useStore(store);
}
