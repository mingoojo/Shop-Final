import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
  
`;

export default function SignupForm() {
  const navigate = useNavigate();
  const [{
    email, password, passwordConfirmation, name, error, accessToken,
  }, store] = useSignupFormStore();
  const { setAccessToken } = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const ChangeEmail = (value:string) => {
    store.changeEmail(value);
  };
  const ChangeName = (value:string) => {
    store.changeName(value);
  };
  const ChangePassword = (value:string) => {
    store.changePassword(value);
  };
  const ChangePasswordConfirmation = (value:string) => {
    store.changePasswordConfirmation(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.signup().then(() => {
      navigate('/');
    });
  };

  return (
    <Container>
      <h2>회원 가입</h2>
      <form onSubmit={handleSubmit}>
        <InputBundle placeholder="name" label="Name" value={name} onChange={ChangeName} />
        <InputBundle placeholder="test@test.com" label="E-mail" value={email} onChange={ChangeEmail} />
        <InputBundle placeholder="password" type="password" label="password" value={password} onChange={ChangePassword} />
        <InputBundle placeholder="password" type="password" label="password" value={passwordConfirmation} onChange={ChangePasswordConfirmation} />
        <Button label="가입하기" type="submit" />
        {error && (
          <p>회원 가입 실패</p>
        )}
      </form>
    </Container>
  );
}
