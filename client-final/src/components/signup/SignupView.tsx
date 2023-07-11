import { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
  
`;

export default function SignupView() {
  const [{
    email, name, password, passwordConfirmation, error, accessToken, valid,
  }, signupStore] = useSignupFormStore();
  const { setAccessToken } = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleName = (value:string) => {
    signupStore.changeName(value);
  };

  const handleEmail = (value:string) => {
    signupStore.changeEmail(value);
  };

  const handlePassword = (value:string) => {
    signupStore.changePassword(value);
  };

  const handlePasswordConfirmation = (value:string) => {
    signupStore.changePasswordConfirmation(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupStore.fetchSignup();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputBundle label="name" value={name} onChange={handleName} />
        <InputBundle label="email" placeholder="test@test.com" value={email} onChange={handleEmail} />
        <InputBundle label="password" type="password" value={password} onChange={handlePassword} />
        <InputBundle label="password" type="password" value={passwordConfirmation} onChange={handlePasswordConfirmation} />
        <Button type="submit" label="가입하기" disable={valid} />
      </form>
      {error && <p className="error">로그인이 실패하였습니다.</p>}
    </Container>
  );
}
