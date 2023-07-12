import useCartStore from '../../hooks/useCartStore';
import CartTable from './CartTable';

export default function CartView() {
  const [{ cartItem }] = useCartStore();

  if (!cartItem.length) {
    return (
      <div>
        카트가 비어있습니다.
      </div>
    );
  }

  return (
    <CartTable cartItem={cartItem} />
  );
}
