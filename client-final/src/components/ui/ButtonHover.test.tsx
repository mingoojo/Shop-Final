import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import ButtonHover from './ButtonHover';

const context = describe;

describe('ButtonHover', () => {
  context('when label is "Button"', () => {
    it('render the button', () => {
      render(<ButtonHover label="Button" />);
      screen.getByText('Button');
    });
  });
  context('when onclick is exist', () => {
    it('render the button', () => {
      const mock = jest.fn();
      const clickEvent = () => {
        mock();
      };
      render(<ButtonHover label="Button" onClick={clickEvent} />);

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
      render(<ButtonHover label="Button" onClick={clickEvent} disable={false} />);

      fireEvent.click(screen.getByText('Button'));

      expect(mock).not.toBeCalled();
    });
  });
});
