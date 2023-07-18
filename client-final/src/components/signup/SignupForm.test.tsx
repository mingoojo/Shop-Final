import { screen } from '@testing-library/react';
import { container } from 'tsyringe';
import { render } from '../../utils/test-helpers';
import SignupFormStore from '../../stores/SignupFormStore';
import SignupForm from './SignupForm';

const context = describe;
describe('SignupForm', () => {
  context('when the error is ture', () => {
    it('renders the login fail message', async () => {
      const store = container.resolve(SignupFormStore);

      await store.setError(true);

      render(<SignupForm />);

      screen.getByText(/가입에 실패했습니다./);
    });
  });

  context('when the data is inserted', () => {
    it('renders the text', async () => {
      const store = container.resolve(SignupFormStore);
      await store.changeEmail('test@test.com');

      render(<SignupForm />);

      screen.getByDisplayValue(/test@test.com/);
    });
  });
});
