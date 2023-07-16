import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import Button from '../ui/Button';

const Container = styled.div`
padding: 1rem;
border-bottom: 1px solid #222;
  h1{
    font-size: 2.5rem;
    margin-block: 1rem;
  }
  nav{
    ul{
      display: flex;
      li{
        margin-right: 1rem;
      }
    }
  }
`;

export default function Header() {
  const { setAccessToken } = useAccessToken();
  const handleClickLogout = () => {
    setAccessToken('');
  };
  return (
    <Container>
      <h1>Shop Administrator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Button label="Logout" onClick={handleClickLogout} />
          </li>
        </ul>
      </nav>
    </Container>
  );
}
