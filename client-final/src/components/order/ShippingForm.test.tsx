import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import ShippingForm from './ShippingForm';

const context = describe;

describe('ShippingForm', () => {
  it('render the text', () => {
    render(<ShippingForm />);
    screen.getByText(/받는사람/);
  });

  context('when name is inserted', () => {
    it('render the text', () => {
      render(<ShippingForm />);

      fireEvent.change(screen.getByLabelText('이름'), {
        target: { value: '조민구' },
      });

      screen.getAllByDisplayValue(/조민구/);
    });
  });
});
