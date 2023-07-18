import { screen } from '@testing-library/react';
import { container } from 'tsyringe';
import { render } from '../../utils/test-helpers';
import CartView from './CartView';
import fixtures from '../../../fixtures';
import CartStore from '../../stores/CartStore';

const context = describe;

describe('CartView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when the cart is empty', () => {
    it('render a message for empty cart', async () => {
      const store = container.resolve(CartStore);

      await store.setCart([]);

      render(<CartView />);
      screen.getByText(/카트가 비어있습니다./);
    });
  });

  context('when the cart is empty', () => {
    it('render a message for empty cart2', async () => {
      const store = container.resolve(CartStore);

      await store.setCart(fixtures.cart);

      render(<CartView />);
      screen.getByText(fixtures.cart[0].name);
    });
  });
});
