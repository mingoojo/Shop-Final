import { Link } from 'react-router-dom';
import useOrderListStore from '../../hooks/useOrderListStore';
import Order from './Order';

export default function OrderListView() {
  const [{ orders, loading, error }] = useOrderListStore();

  if (loading) {
    return (
      <p>loading...</p>
    );
  }

  if (error) {
    return (
      <p>error!</p>
    );
  }

  if (!orders.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {
          orders.map((order) => (
            <li key={order.id}>
              <Link to={`/orders/${order.id}`}>
                <Order order={order} />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
