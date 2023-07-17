import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom:2rem;
  line-height: 1.8;
`;

export default function LoginMessage() {
  return (
    <Container>
      주문하려면
      {' '}
      <Link to="/login">로그인</Link>
      하세요
    </Container>
  );
}
