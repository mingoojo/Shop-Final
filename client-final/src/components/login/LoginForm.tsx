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

  // 엑세스 토큰에 따라 localStorage에서 관리하는 AccessToken에도 적용해준다.
  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  // email 입력 메서드
  const handleEmail = (value:string) => {
    loginFormStore.changeEmail(value);
  };

  // password 입력 메서드
  const handlePassword = (value:string) => {
    loginFormStore.changePassword(value);
  };

  // submit > 입력값을 기준으로 로그인 기능 실행
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
