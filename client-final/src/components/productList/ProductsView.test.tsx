import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import ProductsView from './ProductsView';

describe('ProductsView', () => {
  it('render a text', () => {
    render(<ProductsView products={fixtures.products} />);

    screen.getByText(/상품보기/);
  });
});
