import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import LoginMessage from './LoginMessage';
import Quantity from './Quantity';

const Container = styled.div`
  div{
    margin-block: 1rem;
  }
`;

export default function AddToCartForm() {
  const { accessToken } = useAccessToken();
  if (!accessToken) {
    return (
      <LoginMessage />
    );
  }
  return (
    <Container>
      <Quantity />
    </Container>
  );
}
