import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import OrderedItem from './OrderedItem';

const context = describe;

describe('OrderedItem', () => {
  context('when item is exist', () => {
    it('render the text', () => {
      const item = fixtures.orderDetail[0].cartItem[0];
      render(<OrderedItem item={item} />);

      screen.getByText(item.name);
    });
  });
});
