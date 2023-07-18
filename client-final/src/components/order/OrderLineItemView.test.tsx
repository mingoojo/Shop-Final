import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import OrderLineItemView from './OrderLineItemView';

const context = describe;

describe('OrderLineItemView', () => {
  context('when the lineItem is empty', () => {
    it('render nothing', () => {
      const lineItem = fixtures.nullCart;
      const { container } = render(<OrderLineItemView lineItem={lineItem} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('when the lineItem exist', () => {
    it('render a text', () => {
      const lineItem = fixtures.cart[0];
      render(<OrderLineItemView lineItem={lineItem} />);

      screen.getByText(lineItem.name);
    });
  });
});
