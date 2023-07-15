import useFetch from './useFetch';
import { OrderDetail } from '../types';

export default function useFetchOrder({ orderId }: {
  orderId: string;
}) {
  const {
    data, error, loading,
  } = useFetch<{orderDetail:OrderDetail}>(`/orders/${orderId}`);

  return {
    order: data,
    error,
    loading,
  };
}
