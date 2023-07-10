import { useEffect } from 'react';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../ui/Button';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
  
`;

export default function LoginForm() {
  const [{ email, password, accessToken }, loginStore] = useLoginFormStore();
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
        <Button type="submit" label="로그인" />
      </form>
    </Container>
  );
}
