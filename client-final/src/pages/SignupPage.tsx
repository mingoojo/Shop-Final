import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/signup/SignupForm';
import useSignupFormStore from '../hooks/useSignupFormStore';

export default function SignupPage() {
  const navigate = useNavigate();
  const [{ accessToken }, signupFormStore] = useSignupFormStore();

  // 렌더링 시 사인업폼에 입력값을 초기화한다.
  useEffect(() => {
    signupFormStore.reset();
  }, []);

  // accessToken이 이미 발행되어 있다면 완료페이지로로 이동한다.
  useEffect(() => {
    if (accessToken) {
      signupFormStore.reset();
      navigate('/signup/complete');
    }
  }, [accessToken]);

  return (
    <SignupForm />
  );
}
