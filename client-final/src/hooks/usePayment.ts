import { paymentService } from '../services/PaymentService';
import { CartProduct } from '../types';

export default function usePayment(cartItem: CartProduct[]) {
  const totalPrice = cartItem.reduce((acc, cur) => acc + cur.totalPrice, 0);
  return {
    async requestPayment() {
      const now = new Date();
      const date = now.toISOString().slice(0, 10).replace(/-/g, '');
      const time = now.getTime();
      const nonce = Math.random().toString().slice(-5);
      const merchantId = `ORDER-${date}-${time}${nonce}`;

      const result = await paymentService.requestPayment({
        merchantId,
        product: {
          name: cartItem[0].name,
          price: totalPrice,
        },
      });

      return result;
    },
  };
}
