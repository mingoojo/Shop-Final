import useFetch from './useFetch';

import { Order } from '../types';

export default function useFetchOrders() {
  const { data, error, loading } = useFetch<{
    orders: Order[];
  }>('/orders');

  return {
    orders: data?.orders ?? [],
    error,
    loading,
  };
}
