import useProductFormStore from '../../hooks/useProductFormStore';
import ButtonHover from '../ui/ButtonHover';

export default function SubmitButton() {
  const [, productFormStore] = useProductFormStore();

  const handleClick = () => {
    productFormStore.addToCart();
  };

  return (
    <ButtonHover label="장바구니에 담기" onClick={handleClick} />
  );
}
