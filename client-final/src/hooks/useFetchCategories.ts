import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import categoriesStore from '../stores/categoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(categoriesStore);
  const [{ categories }, Store] = useStore(store);

  useEffect(() => {
    Store.fetchCategories();
  }, []);

  return { categories };
}
