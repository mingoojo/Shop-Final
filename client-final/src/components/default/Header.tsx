import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useFetchCategories from '../../hooks/useFetchCategories';
import ButtonHover from '../ui/ButtonHover';

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
  const { accessToken, setAccessToken } = useAccessToken();
  const { categories } = useFetchCategories();

  const handleClickLogout = () => {
    navigate('/');
    setAccessToken('');
  };
  return (
    <Container>
      <h1>shop</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
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
          {
            accessToken ? (
              <>
                <li>
                  <Link to="/cart">cart</Link>
                </li>
                <li>
                  <ButtonHover label="logout" onClick={handleClickLogout} />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">login</Link>
                </li>
                <li>
                  <Link to="/signup">signup</Link>
                </li>
              </>
            )
          }
        </ul>
      </nav>
    </Container>
  );
}
