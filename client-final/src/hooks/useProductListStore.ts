import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductListStore from '../stores/ProductListStore';

export default function useProductListStore() {
  const store = container.resolve(ProductListStore);
  return useStore(store);
}
