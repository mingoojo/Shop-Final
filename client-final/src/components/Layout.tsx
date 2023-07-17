import { Outlet } from 'react-router-dom';
import useCheckAccessToken from '../hooks/useCheckAccessToken';
import Header from './default/Header';

export default function Layout() {
  useCheckAccessToken();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
