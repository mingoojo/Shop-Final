import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrderDetailStore from '../stores/OrderDetailStore';

export default function useOrderDetailStore() {
  const store = container.resolve(OrderDetailStore);
  return useStore(store);
}
