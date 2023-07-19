import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import useCheckAccessToken from '../hooks/useCheckAccessToken';
import Header from './default/Header';

const Container = styled.div`
  .mainBody{
    .boxSpacing{
      visibility: hidden;
      padding-block: 1rem;
    }
    .mainBox{
      min-height: 80vh;
    }
    max-width: 840px;
    margin: auto;
}
`;

export default function Layout() {
  useCheckAccessToken();
  return (
    <Container>
      <div className="boxSpacing">
        <Header />
      </div>
      <div className="mainBody">
        <main className="mainBox">
          <Outlet />
        </main>
      </div>
    </Container>
  );
}
