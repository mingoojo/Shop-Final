import { Link, useNavigate } from 'react-router-dom';
import useAccessToken from '../../hooks/useAccessToken';

export default function LoginItem() {
  const { setAccessToken } = useAccessToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };
  return (
    <>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <button onClick={handleLogout} type="button">logout</button>
      </li>
    </>
  );
}
