import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useAccessToken from '../../hooks/useAccessToken';
import useCategoriesStore from '../../hooks/useCategoriesStore';
import LoginItem from './LoginItem';
import LogoutItem from './LogoutItem';

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
  const [{ categories }, categoriesStore] = useCategoriesStore();
  const { accessToken } = useAccessToken();

  // 카테고리 정보 얻기
  useEffect(() => {
    categoriesStore.fetchCategories();
  }, []);

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
          {
            accessToken ? (<LoginItem />) : (<LogoutItem />)
          }
        </ul>
      </nav>
    </Container>
  );
}
