import useOrderDetailStore from '../../hooks/useOrderDetailStore';
import OrderDetail from './OrderDetail';

export default function OrderDetailView() {
  const [{ orderDetail, error, loading }] = useOrderDetailStore();

  if (loading) {
    return (
      <p>loading...</p>
    );
  }

  if (error) {
    return (
      <p>error!</p>
    );
  }

  if (orderDetail.id === '') {
    return null;
  }

  return (
    <OrderDetail orderDetail={orderDetail} />
  );
}
