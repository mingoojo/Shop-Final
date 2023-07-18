import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useOrderFormStore from '../../hooks/useOrderFormStore';
import usePayment from '../../hooks/usePayment';
import { CartProduct } from '../../types';
import Button from '../ui/Button';
import useCartStore from '../../hooks/useCartStore';

const Container = styled.div`
margin-block: 2rem;
/* text-align: center; */
  p {
    margin-block: 2rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
  }
`;

type PaymentButtonProps = {
  cart: CartProduct[];
  totalPrice:number
};

export default function PaymentButton({ cart, totalPrice }: PaymentButtonProps) {
  const navigate = useNavigate();
  const [{ valid }, orderFormStore] = useOrderFormStore();
  const [, cartStore] = useCartStore();
  const { requestPayment } = usePayment(cart);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setError('');

    try {
      const { merchantId, transactionId } = await requestPayment();
      orderFormStore.fetchOrder({
        merchantId, transactionId, cart, totalPrice,
      });
      cartStore.fetchDeleteCart();
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
