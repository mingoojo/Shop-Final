import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrderListStore from '../stores/OrderListStore';

export default function useOrderListStore() {
  const store = container.resolve(OrderListStore);
  return useStore(store);
}
