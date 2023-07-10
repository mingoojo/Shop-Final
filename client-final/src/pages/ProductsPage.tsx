import { useSearchParams } from 'react-router-dom';
import ProductsView from '../components/products/ProductsView';
import useFetchProducts from '../hooks/useFetchProducts';

export default function ProductsPage() {
  const [params] = useSearchParams();
  const categoryId = params.get('categoryId') || undefined;
  const { products } = useFetchProducts({ categoryId });

  if (!products.length) {
    return null;
  }

  return (
    <ProductsView products={products} />
  );
}
