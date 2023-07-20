import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import LoginItem from './LoginItem';

const context = describe;

const store = {
  accessToken: 'accessToken-test',
  setAccessToken: jest.fn(),
};

jest.mock('../../hooks/useAccessToken', () => () => store);

describe('LoginItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('when it called', () => {
    it('render the text', () => {
      render(<LoginItem />);

      screen.getByText('Orders');
    });
  });
  context('when it called', () => {
    it('render the text', () => {
      render(<LoginItem />);

      fireEvent.click(screen.getByText('logout'));

      expect(store.setAccessToken).toBeCalled();
    });
  });
});
