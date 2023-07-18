import { container } from 'tsyringe';
import { screen } from '@testing-library/react';
import CartStore from '../../stores/CartStore';
import { render } from '../../utils/test-helpers';
import OrderView from './OrderView';
import fixtures from '../../../fixtures';

const context = describe;

describe('OrderView', () => {
  context('when cart is empty', () => {
    it('render the empty message', () => {
      const store = container.resolve(CartStore);
      store.setCart([]);
      render(<OrderView />);

      screen.getByText('장바구니가 비어있습니다.');
    });
  });
  context('when cart is not empty', () => {
    it('render the text', () => {
      const store = container.resolve(CartStore);
      store.setCart(fixtures.cart);
      render(<OrderView />);

      screen.getByText('주문 작성');
    });
  });
});
