import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import ButtonHover from '../ui/ButtonHover';

const Container = styled.div`

`;

export default function Quantity() {
  const [{ quantity }, productFormStore] = useProductFormStore();
  const handleDec = () => {
    productFormStore.changeQuantity(quantity - 1);
  };
  const handleInc = () => {
    productFormStore.changeQuantity(quantity + 1);
  };
  return (
    <Container>
      <ButtonHover label="-" onClick={handleDec} />
      <input type="input" readOnly value={quantity} />
      <ButtonHover label="+" onClick={handleInc} />
    </Container>
  );
}
