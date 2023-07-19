import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import useLoginFormStore from '../hooks/useLoginFormStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const [{ accessToken }, loginFormStore] = useLoginFormStore();

  // 렌더링 시 로그인폼에 입력값을 초기화한다.
  useEffect(() => {
    loginFormStore.reset();
  }, []);

  // accessToken이 이미 발행되어 있다면 홈으로 이동한다.
  useEffect(() => {
    if (accessToken) {
      loginFormStore.reset();
      navigate('/');
    }
  }, [accessToken]);

  return (
    <LoginForm />
  );
}
