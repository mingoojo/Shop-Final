import { container } from 'tsyringe';

import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';

import ProductDetailStore from '../../stores/ProductDetailStore';

import fixtures from '../../../fixtures';
import ProductDetailView from './ProductDetailView';

const [product] = fixtures.products;

test('ProductDetail', async () => {
  const store = container.resolve(ProductDetailStore);

  await store.fetchProductDetail({ productId: product.id });

  render(<ProductDetailView product={product} />);

  screen.getByText(product.name);
});
