import styled from 'styled-components';
import useProductFormStore from '../../hooks/useProductFormStore';
import AdjustButton from '../ui/AdjustButton';
import InputBundle from '../ui/InputBundle';

const Container = styled.div`
  display: flex;
  align-items: center;
  .Inputbox{
    input{
      text-align: center;
    }
  }
`;
export default function Quantity() {
  const [{ quantity }, productFormStore] = useProductFormStore();
  const handleClickDec = () => {
    productFormStore.setQuantity(quantity - 1);
  };
  const handleClickInk = () => {
    productFormStore.setQuantity(quantity + 1);
  };
  return (
    <Container>
      <AdjustButton label="-" onClick={handleClickDec} />
      <div className="Inputbox">
        <InputBundle value={quantity} readOnly />
      </div>
      <AdjustButton label="+" onClick={handleClickInk} />
    </Container>
  );
}
