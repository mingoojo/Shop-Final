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

export default function useFetchCategory({ categoryId }: {
  categoryId: string;
}) {
  const url = `/categories/${categoryId}`;

  const {
    data, error, loading, mutate,
  } = useFetch<Category>(url);

  return {
    category: data,
    error,
    loading,
    async updateCategory({ name, hidden }: {
      name: string;
      hidden: boolean;
    }) {
      await apiService.updateCategory({ categoryId, name, hidden });
      mutate();
    },
  };
}
