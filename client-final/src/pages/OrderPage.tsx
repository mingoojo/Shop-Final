import OrderForm from '../components/order/OrderForm';
import useFetchCart from '../hooks/useFetchCart';

export default function OrderPage() {
  const { cart } = useFetchCart();

  if (!cart) {
    return null;
  }

  return (
    <OrderForm cart={cart} />
  );
}
