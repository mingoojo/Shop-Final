import React, { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useSignupFormStore from '../../hooks/useSignupFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`

`;

export default function SignupForm() {
  const [{
    email, password, passwordConfirmation, name, valid, accessToken, error,
  }, signupFormStore] = useSignupFormStore();

  const { setAccessToken } = useAccessToken();

  // 엑세스 토큰에 따라 localStorage에서 관리하는 AccessToken에도 적용해준다.
  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  // name 입력 메서드
  const handleName = (value:string) => {
    signupFormStore.changeName(value);
  };

  // email 입력 메서드
  const handleEmail = (value : string) => {
    signupFormStore.changeEmail(value);
  };

  // password 입력 메서드
  const handlePassword = (value:string) => {
    signupFormStore.changePassword(value);
  };

  // passwordConfirmation 입력 메서드
  const handlePasswordConfirmation = (value:string) => {
    signupFormStore.changePasswordConfirmation(value);
  };

  // submit > 입력값을 기준으로 로그인 기능 실행
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupFormStore.fetchSignup();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputBundle value={name} label="name" onChange={handleName} />
        <InputBundle value={email} label="email" placeholder="test@test.com" onChange={handleEmail} />
        <InputBundle value={password} label="password" type="password" onChange={handlePassword} />
        <InputBundle value={passwordConfirmation} label="passwordConfirmation" type="password" onChange={handlePasswordConfirmation} />
        <Button label="가입하기" type="submit" disable={valid} />
      </form>
      {
        error && <p>가입에 실패했습니다.</p>
      }
    </Container>
  );
}
