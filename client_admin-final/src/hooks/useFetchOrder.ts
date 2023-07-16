import useFetch from './useFetch';
import { OrderDetail } from '../types';
import apiService from '../services/apiService';

export default function useFetchOrder({ orderId }: {
  orderId: string;
}) {
  const {
    data, error, loading, mutate,
  } = useFetch<{orderDetail:OrderDetail}>(`/orders/${orderId}`);

  return {
    order: data,
    error,
    loading,
    async updateOrder({ status }: {
      status: string;
    }) {
      await apiService.updateOrder({ orderId, status });

      mutate();
    },
  };
}
