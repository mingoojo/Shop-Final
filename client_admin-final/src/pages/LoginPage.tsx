import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();

  const [{ accessToken }, loginStore] = useLoginFormStore();

  useEffect(() => {
    loginStore.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      loginStore.reset();
      navigate('/');
    }
  }, [accessToken]);


  return (
    <LoginForm />
  );
}
