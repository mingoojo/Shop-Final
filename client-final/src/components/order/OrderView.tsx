import useCartStore from '../../hooks/useCartStore';
import OrderTable from './OrderTable';
import PaymentButton from './PaymentButton';
import ShippingForm from './ShippingForm';

export default function OrderView() {
  const [{ cart, totalPrice }] = useCartStore();

  if (!cart.length) {
    return (
      <p>장바구니가 비어있습니다.</p>
    );
  }

  return (
    <div>
      <h1>주문 작성</h1>
      <OrderTable cart={cart} totalPrice={totalPrice} />
      <ShippingForm />
      <PaymentButton cart={cart} totalPrice={totalPrice} />
    </div>
  );
}
