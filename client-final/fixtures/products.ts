import { ProductDetail } from '../src/types';

const products: ProductDetail[] = [
  {
    id: 'product-01',
    category: {
      id: 'category-01',
      name: 'Top',
    },
    image: 'http://example.com/01.jpg',
    name: 'Product #1',
    price: 128_000,
    options: [
      {
        kind: 'Color',
        items: [
          { name: 'Black' },
          { name: 'White' },
        ],
      },
      {
        kind: 'Size',
        items: [
          { name: 'S' },
          { name: 'M' },
          { name: 'L' },
        ],
      },
    ],
    description: '1st line\n2nd line\n3rd line',
  },
];

export default products;
