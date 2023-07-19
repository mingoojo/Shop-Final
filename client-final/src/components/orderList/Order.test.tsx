import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Order from './Order';
import fixtures from '../../../fixtures';

const context = describe;

const order = fixtures.orders[0];

describe('Order', () => {
  context('when the error is not occurred', () => {
    it('render the text', () => {
      render(<Order order={order} />);

      screen.getByText(`주문 일시: ${order.orderedAt}`);
    });
  });
});
