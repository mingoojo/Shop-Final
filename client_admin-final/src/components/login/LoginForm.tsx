import { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
  .error{
    line-height: 7rem;
  }
`;

export default function LoginForm() {
  const [{
    email, password, accessToken, error, valid,
  }, loginStore] = useLoginFormStore();
  const { setAccessToken } = useAccessToken();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleEmail = (value : string) => {
    loginStore.changeEmail(value);
  };
  const handlePassword = (value : string) => {
    loginStore.changePassword(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginStore.fetchLogin();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputBundle label="email" placeholder="test@test.com" value={email} onChange={handleEmail} />
        <InputBundle label="password" type="password" value={password} onChange={handlePassword} />
        <Button type="submit" label="로그인" disable={valid} />
      </form>
      {error && <p className="error">로그인이 실패하였습니다.</p>}
    </Container>
  );
}
