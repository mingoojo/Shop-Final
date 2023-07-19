import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fixtures from '../../../fixtures';
import { CartProduct } from '../../types';
import { render } from '../../utils/test-helpers';
import CartTable from './CartTable';

const context = describe;

describe('CartTable', () => {
  async function renderCartTable({ cart }:{cart:CartProduct[]}) {
    await act(() => {
      render(<CartTable cart={cart} />);
    });
  }
  context('when cart is exist', () => {
    const { cart } = fixtures;
    it('render cart', () => {
      renderCartTable({ cart });
      screen.getByText('제품명');
    });
  });
});
