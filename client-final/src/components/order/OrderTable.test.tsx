import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import OrderTable from './OrderTable';

const context = describe;

const { cart } = fixtures;
const { totalPrice } = cart[0];

describe('OrderTable', () => {
  context('when the correct', () => {
    it('render the text', () => {
      render(<OrderTable cart={cart} totalPrice={totalPrice} />);

      screen.getByText('제품명');
    });
  });
});
