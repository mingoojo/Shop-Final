import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupView from '../components/signup/SignupView';
import useSignupFormStore from '../hooks/useSignupFormStore';

export default function SignupPage() {
  const navigate = useNavigate();

  const [{ accessToken }, signupStore] = useSignupFormStore();

  useEffect(() => {
    signupStore.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      signupStore.reset();
      navigate('/');
    }
  }, [accessToken]);

  return (
    <SignupView />
  );
}
