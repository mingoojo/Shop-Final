import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useFetchCategories from '../../hooks/useFetchCategories';
import Button from '../ui/Button';

const Container = styled.header`
  margin-block: 1rem;
  padding: 0rem 5rem 0rem 5rem;
  h1{
    font-size: 3rem;
  }
  nav{
    display: flex;
    justify-content: space-between;
    ul{
      display: flex;
      margin-block: 1rem;
      li{
        margin-right: 1rem;
      }
    }
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const { categories } = useFetchCategories();
  const { accessToken, setAccessToken } = useAccessToken();
  const handleClickLogout = () => {
    setAccessToken('');
    navigate('/');
  };
  return (
    <Container>
      <h1>shop</h1>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
              <ul>
                {
                  categories.map((category) => (
                    <li key={category.id}>
                      <Link to={`/products?categoryId=${category.id}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            {
              accessToken ? (
                <>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/orders">Orders</Link>
                  </li>
                  <li>
                    <Button label="Logout" onClick={handleClickLogout} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </nav>
    </Container>
  );
}
