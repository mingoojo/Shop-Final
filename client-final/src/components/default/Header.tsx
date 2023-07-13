import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useFetchCategories from '../../hooks/useFetchCategories';
import ButtonHover from '../ui/ButtonHover';

const Container = styled.header`
  margin-block: 1rem;
  padding: 0rem 5rem 0rem 5rem;
  a:hover{
    text-decoration: underline;
  }
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
        .list{
          li{
            padding: .5rem;
          }
          padding: 1rem;
          background-color: ${(props) => props.theme.colors.backgroundMain};
          border: 2px solid #222;
          position: absolute;
          display: none;
          flex-direction: column;
          transform: translateY(-8px);
        }

        .productHeader:hover + .list{
          display: flex;
        }

        .list:hover{
          display: flex;
        }
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products" className="productHeader">Products</Link>
            <ul className="list">
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
        {
          accessToken ? (
            <ul>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <ButtonHover label="Log out" onClick={handleClickLogout} />
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )
        }
      </nav>
    </Container>
  );
}
