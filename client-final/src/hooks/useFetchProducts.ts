import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import productsStore from '../stores/productsStore';

export default function useFetchProducts({ categoryId }:{categoryId?:string}) {
  const store = container.resolve(productsStore);
  const [{ products }, Store] = useStore(store);

  useEffect(() => {
    Store.fetchProducts({ categoryId });
  }, [categoryId]);

  return { products };
}
