import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useFetchCategories from '../../hooks/useFetchCategories';

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
  const { accessToken } = useAccessToken();
  const { categories } = useFetchCategories();

  const handleClickLogout = () => {
    navigate('/');
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
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
