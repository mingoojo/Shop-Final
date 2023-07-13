import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useOrderDetailStore from '../hooks/useOrderDetailStore';
import OrderDetailView from '../components/orderDetail/OrderDetailView';

export default function OrderDetailPage() {
  const params = useParams();
  const [{ orderDetail, error }, orderDetailStore] = useOrderDetailStore();

  useEffect(() => {
    orderDetailStore.fetchOrderDetail({ orderId: String(params.id) });
  }, []);

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <div>
      <OrderDetailView orderDetail={orderDetail} />
    </div>
  );
}
