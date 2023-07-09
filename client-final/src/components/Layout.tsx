import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import useCheckAccessToken from '../hooks/useCheckAccessToken';
import Footer from './default/Footer';
import Header from './default/Header';

const Container = styled.div`
  .headerBox{
    border-bottom: 1px solid #222;
    position: fixed;
    background-color: ${(props) => props.theme.colors.backgroundMain};
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
      <div className="headerBox">
        <Header />
      </div>
      <div className="mainBody">
        <div className="boxSpacing">
          <Header />
        </div>
        <main className="mainBox">
          <Outlet />
        </main>
        <Footer />
      </div>
    </Container>
  );
}
