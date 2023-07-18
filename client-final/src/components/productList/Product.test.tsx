import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import Product from './Product';

describe('Product', () => {
  it('render a text', () => {
    render(<Product product={fixtures.products[0]} />);

    screen.getByText(fixtures.products[0].name);
    screen.getByRole('img');
  });
});
