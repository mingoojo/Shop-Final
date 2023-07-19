import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import ButtonHover from '../ui/ButtonHover';

const Container = styled.div`
  .quantityView{
    height: 32px;
  }
`;

export default function Quantity() {
  const [{ quantity }, productFormStore] = useProductFormStore();

  // quantity 감소 메서드
  const handleDec = () => {
    productFormStore.changeQuantity(quantity - 1);
  };

  // quantity 증가 메서드
  const handleInc = () => {
    productFormStore.changeQuantity(quantity + 1);
  };

  return (
    <Container>
      <ButtonHover label="-" onClick={handleDec} />
      <input className="quantityView" type="input" readOnly value={quantity} />
      <ButtonHover label="+" onClick={handleInc} />
    </Container>
  );
}
