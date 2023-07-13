import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserListPage from './pages/UserListPage';

const routes = [
  { path: '/login', element: <LoginPage /> },
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/users', element: <UserListPage /> },
    ],
  },
];

export default routes;
