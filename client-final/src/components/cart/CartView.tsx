import useCartStore from '../../hooks/useCartStore';
import CartTable from './CartTable';

export default function CartView() {
  const [{ cart }] = useCartStore();

  if (!cart.length) {
    return (
      <div>
        카트가 비어있습니다.
      </div>
    );
  }

  return (
    <CartTable cart={cart} />
  );
}
