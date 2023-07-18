import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { CartProduct } from '../../types';
import { render } from '../../utils/test-helpers';
import CartTable from './CartTable';

const context = describe;

describe('CartTable', () => {
  function renderCartTable({ cart }:{cart:CartProduct[]}) {
    render(<CartTable cart={cart} />);
  }
  context('when cart is exist', () => {
    const { cart } = fixtures;
    it('render cart', () => {
      renderCartTable({ cart });
      screen.getByText('제품명');
    });
  });
});
