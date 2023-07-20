import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import fixtures from '../../../fixtures';
import { CartProduct } from '../../types';
import { render } from '../../utils/test-helpers';
import CartTable from './CartTable';

const context = describe;

describe('CartTable', () => {
  async function renderCartTable({ cart, totalPrice }:{cart:CartProduct[], totalPrice:number}) {
    await act(() => {
      render(<CartTable cart={cart} totalPrice={totalPrice} />);
    });
  }
  context('when cart is exist', () => {
    const { cart } = fixtures;
    const totalPrice = cart.reduce((acc, cur) => (acc + cur.totalPrice), 0);
    it('render cart', () => {
      renderCartTable({ cart, totalPrice });
      screen.getByText('제품명');
    });
  });
});
