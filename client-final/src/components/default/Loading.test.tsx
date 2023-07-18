import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Loading from './Loading';

const context = describe;

describe('Loading', () => {
  context('when the render loading', () => {
    it('render a text', () => {
      render(<Loading />);

      screen.getByText('Loading...');
    });
  });
});
