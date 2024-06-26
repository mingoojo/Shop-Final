import { fireEvent, screen, waitFor } from '@testing-library/react';
import { container } from 'tsyringe';
import { render } from '../../utils/test-helpers';
import LoginForm from './LoginForm';
import LoginFormStore from '../../stores/LoginFormStore';

const context = describe;
describe('LoginForm', () => {
  context('when the error is ture', () => {
    it('renders the login fail message', async () => {
      const store = container.resolve(LoginFormStore);

      await store.setError(true);

      render(<LoginForm />);

      screen.getByText(/로그인 실패/);
    });
  });
  context('when the data is inserted', () => {
    it('renders the text', async () => {
      const store = container.resolve(LoginFormStore);
      await store.changeEmail('test@test.com');

      render(<LoginForm />);

      screen.getByDisplayValue(/test@test.com/);
    });
  });
});
