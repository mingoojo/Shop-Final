import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductFormStore from '../stores/ProductFromStore';

export default function useProductFormStore() {
  const store = container.resolve(ProductFormStore);
  return useStore(store);
}
