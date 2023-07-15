// export default function useFetchCategories() {
//   const {
//     data, error, loading, mutate,
//   } = useFetch<{
//     categories: Category[];
//   }>('/categories');
// }
import useFetch from './useFetch';

import { Category } from '../types';
import apiService from '../services/apiService';

export default function useFetchCategories() {
  const {
    data, error, loading, mutate,
  } = useFetch<{
    categories: Category[];
  }>('/categories');

  return {
    categories: data?.categories ?? [],
    error,
    loading,
    async createCategory({ name }: {
      name: string;
    }) {
      await apiService.createCategory({ name });
      mutate();
    },
  };
}
