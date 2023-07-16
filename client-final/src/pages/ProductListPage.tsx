import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/default/Loading';
import ProductsView from '../components/productList/ProductsView';
import useProductListStore from '../hooks/useProductListStore';

export default function ProductListPage() {
  const [params] = useSearchParams();
  const categoryId = params.get('categoryId') || undefined;
  const [{ products, error, loading }, productListStore] = useProductListStore();

  useEffect(() => {
    productListStore.fetchProductList({ categoryId });
  }, [categoryId]);

  if (error) {
    return (
      <p>error!</p>
    );
  }

  if (loading) {
    return (
      <Loading />
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <ProductsView products={products} />
  );
}
