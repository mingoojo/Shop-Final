import { Outlet } from 'react-router-dom';
import Header from './default/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
