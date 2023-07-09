import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBundle from '../ui/InputBundle';
import useLoginFormStore from '../../hooks/useLoginFormStore';
import Button from '../ui/Button';
import useAccessToken from '../../hooks/useAccessToken';

const Container = styled.div`

`;

export default function LoginForm() {
  const { setAccessToken } = useAccessToken();
  const navigate = useNavigate();

  const [{
    email, password, error, valid, accessToken,
  }, store] = useLoginFormStore();

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  const handleChangeEmail = (value : string) => {
    store.changeEmail(value);
  };

  const handleChangePassword = (value : string) => {
    store.changePassword(value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.login().then(() => {
      navigate('/');
    });
  };

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <InputBundle label="E-mail" value={email} onChange={handleChangeEmail} />
        <InputBundle label="Password" type="password" value={password} onChange={handleChangePassword} />
        <Button label="로그인" type="submit" disable={valid} />
      </form>
      {
        error && (
          <p>로그인 실패</p>
        )
      }
    </Container>
  );
}
