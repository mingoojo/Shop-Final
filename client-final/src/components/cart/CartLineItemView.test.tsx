import { screen } from '@testing-library/react';
import { table } from 'console';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import CartLineItemView from './CartLineItemView';

describe('CartLineItemView', () => {
  it('render a line item', () => {
    const [lineItem] = fixtures.cart;

    render((
      <table>
        <tbody>
          <CartLineItemView lineItem={lineItem} />
        </tbody>
      </table>
    ));
    screen.getByText(lineItem.name);
  });
});
