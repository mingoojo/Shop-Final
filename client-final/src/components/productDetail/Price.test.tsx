import { container as iocContainer } from 'tsyringe';
import fixtures from '../../../fixtures';
import ProductFormStore from '../../stores/ProductFormStore';
import Price from './Price';
import { render } from '../../utils/test-helpers';

const [product] = fixtures.products;
describe('Price', () => {
  const quantity = 2;
  beforeEach(() => {
    const productFormStore = iocContainer.resolve(ProductFormStore);

    productFormStore.setProduct(product);
    productFormStore.changeQuantity(quantity);
  });

  it('renders price', () => {
    const { container } = render(<Price />);
    const price = (product.price * quantity).toLocaleString();

    expect(container).toHaveTextContent(`${price}원`);
  });
});
