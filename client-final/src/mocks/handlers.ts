// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { ProductSummary } from '../types';
import fixtures from '../../fixtures';

const productSummaries: ProductSummary[] = fixtures.products
  .map((product) => ({
    id: product.id,
    category: product.category,
    image: product.image,
    name: product.name,
    price: product.price,
  }));

const handlers = [
  rest.get('http://localhost:3000/categories', (req, res, ctx) => (
    res(ctx.json({ categories: fixtures.categories }))
  )),

  rest.get('http://localhost:3000/products', (req, res, ctx) => (
    res(ctx.json({ products: productSummaries }))
  )),

  rest.post('http://localhost:3000/login', (req, res, ctx) => (
    res(ctx.json({ accessToken: 'accessToken-test' }))
  )),

  rest.post('http://localhost:3000/signup', (req, res, ctx) => (
    res(ctx.json({ accessToken: 'accessToken-test' }))
  )),

  rest.get('http://localhost:3000/products/:id', (req, res, ctx) => (
    res(ctx.json({ productDetail: fixtures.products[0] }))
  )),

  rest.get('http://localhost:3000/categories/products', (req, res, ctx) => (
    res(ctx.json({ products: productSummaries }))
  )),

  rest.get('http://localhost:3000/cart', (req, res, ctx) => (
    res(ctx.json({ cartItems: fixtures.cart }))
  )),

  rest.get('http://localhost:3000/users/me', (req, res, ctx) => (
    res(ctx.json({ id: 'USER-ID', name: 'tester' }))
  )),

  rest.get('http://localhost:3000/categories/products/:id', (req, res, ctx) => {
    const product = fixtures.products.find((i) => i.id === req.params.id);
    if (!product) {
      return res(ctx.status(404));
    }
    return res(ctx.json(product));
  }),

  rest.get('http://localhost:3000/categories/cart', (req, res, ctx) => (
    res(ctx.json(fixtures.cart))
  )),

  rest.get('http://localhost:3000/orders', (req, res, ctx) => (
    res(ctx.json(fixtures.orders))
  )),

  rest.get('http://localhost:3000/orders/:id', (req, res, ctx) => {
    const orderDetail = fixtures.orderDetail[0];
    return res(ctx.json(orderDetail));
  }),

  rest.post('http://localhost:3000/categories/cart/line-items', (req, res, ctx) => (
    res(ctx.status(201))
  )),
];

export default handlers;
