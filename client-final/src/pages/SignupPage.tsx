import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '../components/signup/SignupForm';
import useSignupFormStore from '../hooks/useSignupFormStore';

export default function SignupPage() {
  const navigate = useNavigate();
  const [{ accessToken }, signupFormStore] = useSignupFormStore();

  useEffect(() => {
    signupFormStore.reset();
  }, []);

  useEffect(() => {
    if (accessToken) {
      signupFormStore.reset();
      navigate('/');
    }
  }, [accessToken]);

  return (
    <SignupForm />
  );
}
