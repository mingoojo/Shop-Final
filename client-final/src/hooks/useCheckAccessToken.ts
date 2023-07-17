import { useEffect } from 'react';
import apiService from '../services/apiService';
import useAccessToken from './useAccessToken';

export default function useCheckAccessToken() {
  const { accessToken, setAccessToken } = useAccessToken();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        await apiService.fetchCurrentUser();
      } catch (err) {
        setAccessToken('');
      }
    };
    fetchCurrentUser();
  }, [accessToken, setAccessToken]);
}
