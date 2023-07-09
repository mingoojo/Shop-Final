import { useParams } from 'react-router-dom';
import Loading from '../components/default/Loading';
import ProductDetailView from '../components/productDetail/ProductDetailView';
import useFetchProduct from '../hooks/useFetchProduct';

export default function ProductDetailPage() {
  const params = useParams();
  const { product, error, loading } = useFetchProduct({ productId: String(params.id) });

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

  if (!product.id) {
    return null;
  }

  return (
    <ProductDetailView product={product} />
  );
}
