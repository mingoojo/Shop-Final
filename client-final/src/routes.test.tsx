import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { container } from 'tsyringe';
import defaultTheme from './styles/defaultTheme';
import routes from './routes';
import ProductDetailStore from './stores/ProductDetailStore';
import fixtures from '../fixtures';

const context = describe;

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render((
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    ));
  }

  context('when the current path is “/”', () => {
    it('renders the home page', async () => {
      renderRouter('/');

      await waitFor(() => {
        screen.getByText(/Home page/);
      });
    });
  });

  context('when the current path is "/login"', () => {
    it('renders the login button', async () => {
      renderRouter('/login');
      screen.getByRole('button', { name: '로그인' });
      await waitFor(() => {
        screen.getByText(/로그인/);
      });
    });

    it('renders the login complete action', async () => {
      renderRouter('/login');

      fireEvent.change(screen.getByLabelText('email'), {
        target: { value: 'swyks11@naver.com' },
      });

      fireEvent.change(screen.getByLabelText('password'), {
        target: { value: 'test1234' },
      });

      fireEvent.click(screen.getByRole('button', { name: '로그인' }));

      waitFor(() => {
        screen.getByText(/Orders/);
        screen.getByText(/Cart/);
        screen.getByRole('button', { name: 'logout' });
      });
    });
  });

  context('when the current path is “/signup', () => {
    it('renders the signup page', async () => {
      renderRouter('/signup');

      screen.getByRole('button', { name: '가입하기' });

      await waitFor(() => {
        screen.getByText(/Category #1/);
      });

      fireEvent.change(screen.getByLabelText('email'), {
        target: { value: 'newbie@example.com' },
      });

      fireEvent.change(screen.getByLabelText('name'), {
        target: { value: 'Newbie' },
      });

      fireEvent.change(screen.getByLabelText('password'), {
        target: { value: 'password' },
      });
      fireEvent.change(screen.getByLabelText('passwordConfirmation'), {
        target: { value: 'password' },
      });

      fireEvent.click(screen.getByRole('button', { name: '가입하기' }));

      waitFor(() => {
        screen.getByText(/회원 가입이 완료되었습니다/);
      });
    });
  });

  context('when the current path is “/signup/complete', () => {
    it('renders the signup complete page', async () => {
      renderRouter('/signup/complete');

      screen.getByText(/회원 가입이 완료되었습니다/);

      await waitFor(() => {
        screen.getByText(/Category #1/);
      });
    });
  });

  context('when the current path is “/products”', () => {
    context('without category ID', () => {
      it('renders the product list page', async () => {
        renderRouter('/products');

        await waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context('when the current path is “/products/{id}”', () => {
    context('with correct ID', () => {
      it('renders the product list page', async () => {
        renderRouter('/products/product-01');

        const store = container.resolve(ProductDetailStore);

        await store.setProduct(fixtures.products[0]);

        screen.getByText(/loading/);

        waitFor(() => {
          screen.getByText(/Product #1/);
        });
      });
    });
  });

  context('when the current path is “/cart”', () => {
    it('renders the cart page', async () => {
      renderRouter('/cart');

      await waitFor(() => {
        screen.getByText(/합계/);
      });
    });
  });

  context('when the current path is “/orders', () => {
    it('renders the order list page', async () => {
      renderRouter('/orders');

      await waitFor(() => {
        screen.getByText(/주문목록/);
      });
    });
  });

  context('when the current path is “/orders/{id}', () => {
    context('with correct ID', () => {
      it('renders the product detail page', async () => {
        renderRouter('/orders/order-01');

        screen.getByText(/loading.../);

        waitFor(() => {
          screen.getByText(/맨투맨/);
        });
      });
    });
  });
});
