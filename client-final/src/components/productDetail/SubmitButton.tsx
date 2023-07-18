import useProductFormStore from '../../hooks/useProductFormStore';
import ButtonHover from '../ui/ButtonHover';

export default function SubmitButton() {
  const [{ done }, productFormStore] = useProductFormStore();

  const handleClick = () => {
    productFormStore.addToCart();
  };
  if (done) {
    return (
      <p>장바구니에 담았습니다.</p>
    );
  }
  return (
    <ButtonHover label="장바구니에 담기" onClick={handleClick} />
  );
}
