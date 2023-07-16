import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import CategoriesStore from '../stores/CategoriesStore';

export default function useCategoriesStore() {
  const store = container.resolve(CategoriesStore);
  return useStore(store);
}
