import { fireEvent, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import LogoutItem from './LogoutItem';

const context = describe;

describe('LogoutItem', () => {
  context('when it called', () => {
    it('render the text', () => {
      render(<LogoutItem />);

      screen.getByText('Login');
    });
  });

  context('when click "Login" button', () => {
    it('render the "LoginPage"', () => {
      render(<LogoutItem />);

      fireEvent.click(screen.getByText('Login'));

      waitFor(() => {
        screen.getByText('email');
      });
    });
  });
});
