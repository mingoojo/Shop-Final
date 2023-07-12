import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOrderFormStore from '../../hooks/useOrderFormStore';
import usePayment from '../../hooks/usePayment';
import apiService from '../../services/apiService';
import { CartProduct } from '../../types';
import Button from '../ui/Button';

const Container = styled.div`
  p {
    margin-block: 2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
  }
`;

type PaymentButtonProps = {
  cartItem: CartProduct[];
  totalPrice:number
};

export default function PaymentButton({ cartItem, totalPrice }: PaymentButtonProps) {
  const navigate = useNavigate();
  const [{ valid }, orderFormStore] = useOrderFormStore();
  const { requestPayment } = usePayment(cartItem);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setError('');

    try {
      const { merchantId, transactionId } = await requestPayment();
      orderFormStore.fetchOrder({
        merchantId, transactionId, cartItem, totalPrice,
      });
      // console.log(merchantId, transactionId);
      // console.log(cartItem);
      // console.log(totalPrice);
      navigate('/order/complete');
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <Container>
      <Button label="결제" onClick={handleClick} disable={!valid} />
      {error && (
        <p>{error}</p>
      )}
    </Container>
  );
}
