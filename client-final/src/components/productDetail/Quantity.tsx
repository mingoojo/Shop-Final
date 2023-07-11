import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import ButtonHover from '../ui/ButtonHover';

const Container = styled.div`
  input{
    height: 32px;
    text-align: center;
  }
`;

export default function Quantity() {
  const [{ quantity }, productFormStore] = useProductFormStore();

  const handleClickDec = () => {
    productFormStore.changeQuantity(quantity - 1);
  };

  const handleClickInc = () => {
    productFormStore.changeQuantity(quantity + 1);
  };

  return (
    <Container>
      <ButtonHover label="-" onClick={handleClickDec} />
      <input type="input" readOnly value={quantity} />
      <ButtonHover label="+" onClick={handleClickInc} />
    </Container>
  );
}
