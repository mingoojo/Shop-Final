import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import useCheckAccessToken from '../hooks/useCheckAccessToken';
import Header from './default/Header';

const Container = styled.div`
border: 2px solid #222;
  .headerBox{
    border-bottom: 1px solid #222;
    background-color: ${(props) => props.theme.colors.backgroundMain};
    position: fixed;
    width: 100vw;
  }
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
