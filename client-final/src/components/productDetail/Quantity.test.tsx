import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Quantity from './Quantity';

const context = describe;
const store = {
  quantity: 7,
  changeQuantity: jest.fn(),
};

jest.mock('../../hooks/useProductFormStore', () => () => [store, store]);

describe('Quantity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('render Quantity', () => {
    render(<Quantity />);

    expect(screen.getByRole('textbox')).toHaveValue('7');
  });

  context('when click button "+"', () => {
    it('calls "changeQuantity" action', () => {
      render(<Quantity />);
      fireEvent.click(screen.getByRole('button', { name: '+' }));

      expect(store.changeQuantity).toBeCalledWith(8);
    });
  });

  context('when click button "-"', () => {
    it('calls "changeQuantity" action', () => {
      render(<Quantity />);
      fireEvent.click(screen.getByRole('button', { name: '-' }));

      expect(store.changeQuantity).toBeCalledWith(6);
    });
  });
});
