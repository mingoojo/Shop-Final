import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import InputBundle from './InputBundle';

const context = describe;

describe('InputBundle', () => {
  context('when lable is email', () => {
    it('render a text', () => {
      render(<InputBundle label="email" value="email" />);

      screen.getByText('email');
      screen.getByDisplayValue('email');
    });
  });

  context('when readOnly is true', () => {
    it('can not use change event', () => {
      render(<InputBundle label="email" value="email" readOnly />);

      fireEvent.change(screen.getByDisplayValue('email'), {
        target: { value: 'password' },
      });

      (screen.getByText('email'));
      screen.getByDisplayValue('email');
    });
  });
});
