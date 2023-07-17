import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailView from '../components/productDetail/ProductDetailView';
import useProductDetailStore from '../hooks/useProductDetailStore';

export default function ProductDetailPage() {
  const params = useParams();
  const [{ product, error, loading }, productDetailStore] = useProductDetailStore();

  useEffect(() => {
    productDetailStore.fetchProductDetail({ productId: String(params.id) });
  }, []);

  if (loading) {
    return (
      <p>loading</p>
    );
  }

  if (error) {
    return (
      <p>error!</p>
    );
  }

  if (!product.name) {
    return null;
  }

  return (
    <ProductDetailView product={product} />
  );
}
