import useCartStore from '../../hooks/useCartStore';
import OrderTable from './OrderTable';
import PaymentButton from './PaymentButton';
import ShippingForm from './ShippingForm';

export default function OrderView() {
  const [{ cartItem }] = useCartStore();

  if (!cartItem) {
    return (
      null
    );
  }

  const totalPrice = cartItem.reduce((acc, cur) => acc + cur.totalPrice, 0);

  return (
    <div>
      <h1>주문 작성</h1>
      <OrderTable cartItem={cartItem} totalPrice={totalPrice} />
      <ShippingForm />
      <PaymentButton cartItem={cartItem} totalPrice={totalPrice} />
    </div>
  );
}
