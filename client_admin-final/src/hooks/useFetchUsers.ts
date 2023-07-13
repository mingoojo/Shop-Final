import useFetch from './useFetch';

import { User } from '../types';

export default function useFetchUsers() {
  const { data, error, loading } = useFetch<{
    userList: User[];
  }>('/users');

  return {
    users: data?.userList ?? [],
    error,
    loading,
  };
}
