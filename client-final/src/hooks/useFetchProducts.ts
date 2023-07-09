import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductStore from '../stores/ProductsStore';

export default function useFetchProducts({ categoryId }:{ categoryId?:string }) {
  const store = container.resolve(ProductStore);
  const [{ products, loading, error }, productsStore] = useStore(store);

  useEffect(() => {
    productsStore.fetchProducts({ categoryId });
  }, [categoryId]);

  return {
    products, loading, error,
  };
}
