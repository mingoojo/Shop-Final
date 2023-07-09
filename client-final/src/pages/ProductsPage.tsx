import { useSearchParams } from 'react-router-dom';
import Loading from '../components/default/Loading';
import ProductsView from '../components/products/ProductsView';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductsPage() {
  const [params] = useSearchParams();
  const categoryId = params.get('categoryId') || undefined;
  const { products, loading, error } = useFetchProducts({ categoryId });

  if (loading) {
    return (
      <Loading />
    );
  }
  if (error) {
    return (
      <p>error</p>
    );
  }

  return (
    <ProductsView products={products} />
  );
}
