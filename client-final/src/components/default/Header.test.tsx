import {
  act, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Header from './Header';

const context = describe;

const store = {
  accessToken: 'accessToken-test',
  setAccessToken: jest.fn(),
};

jest.mock('../../hooks/useAccessToken', () => () => store);

describe('Header', () => {
  context('when accessToken is correct', () => {
    it('render a texts', async () => {
      await act(() => {
        render(<Header />);
      });
      screen.getByText(/Cart/);
    });
  });

  context('when click the "logout" button', () => {
    it('render a texts', async () => {
      await act(() => {
        render(<Header />);
      });

      await fireEvent.click(screen.getByRole('button', { name: 'logout' }));

      waitFor(() => {
        screen.getByText(/Login/);
      });
    });
  });

  context('when hover the "Products" button', () => {
    it('render a texts', async () => {
      await act(() => {
        render(<Header />);
      });

      await fireEvent.mouseUp(screen.getByText(/Products/));

      waitFor(() => {
        screen.getByText(/top/);
        screen.getByText(/outter/);
        screen.getByText(/bottom/);
        screen.getByText(/acc/);
      });
    });
  });
});
