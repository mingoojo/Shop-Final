import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Button from './Button';

const context = describe;

describe('Button', () => {
  context('when label is "Button"', () => {
    it('render the button', () => {
      render(<Button label="Button" />);
      screen.getByText('Button');
    });
  });
  context('when onclick is exist', () => {
    it('render the button', () => {
      const mock = jest.fn();
      const clickEvent = () => {
        mock();
      };
      render(<Button label="Button" onClick={clickEvent} />);

      fireEvent.click(screen.getByText('Button'));

      expect(mock).toBeCalled();
    });
  });
  context('when onclick is exist and disable is false', () => {
    it('render the button', () => {
      const mock = jest.fn();
      const clickEvent = () => {
        mock();
      };
      render(<Button label="Button" onClick={clickEvent} disable={false} />);

      fireEvent.click(screen.getByText('Button'));

      expect(mock).not.toBeCalled();
    });
  });
});
