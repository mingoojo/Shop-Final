import { useEffect } from 'react';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import ProductDetailStore from '../stores/ProductDetailStore';
import useProductFormStore from './useProductFormStore';

export default function useFetchProduct({ productId }:{productId:string}) {
  const store = container.resolve(ProductDetailStore);
  const [{ product, error, loading }, Store] = useStore(store);
  const [, productFormStore] = useProductFormStore();

  useEffect(() => {
    Store.fetchProduct({ productId });
  }, [productId]);

  useEffect(() => {
    productFormStore.setProduct(product);
  }, [product]);

  return {
    product, error, loading,
  };
}
