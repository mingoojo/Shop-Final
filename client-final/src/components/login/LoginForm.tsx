import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`

`;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();
  const [{
    email, password, error, accessToken, valid,
  }, loginFormStore] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleEmail = (value:string) => {
    loginFormStore.changeEmail(value);
  };

  const handlePassword = (value:string) => {
    loginFormStore.changePassword(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginFormStore.fetchLogin();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputBundle value={email} placeholder="test@test.com" label="email" onChange={handleEmail} />
        <InputBundle value={password} label="password" onChange={handlePassword} type="password" />
        <Button label="로그인" type="submit" disable={valid} />
      </form>
      {
        error && <p>로그인 실패</p>
      }
    </Container>
  );
}
