import { Link } from 'react-router-dom';

export default function LogoutItem() {
  return (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </>
  );
}
