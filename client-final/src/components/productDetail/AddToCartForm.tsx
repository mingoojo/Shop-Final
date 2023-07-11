import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useProductFormStore from '../../hooks/useProductFormStore';
import LoginMessage from './LoginMessage';
import Options from './Options';
import Price from './Price';
import Quantity from './Quantity';
import SubmitButton from './SubmitButton';

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
      <Price />
      <Options />
      <SubmitButton />
    </Container>
  );
}
