import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import Image from './Image';

const context = describe;

describe('image', () => {
  context('when images is not empty', () => {
    const image = 'http://example.com/test.jpg';
    it('render nothing', () => {
      render(<Image image={image} />);

      screen.getByRole('img');
    });
  });
  context('when images is empty', () => {
    it('render nothing', () => {
      const { container } = render(<Image image="" />);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
