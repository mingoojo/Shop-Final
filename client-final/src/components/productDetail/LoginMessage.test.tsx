import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import LoginMessage from './LoginMessage';

describe('LoginMessage', () => {
  it('render', () => {
    render(<LoginMessage />);

    screen.getByText('로그인');
  });
});
