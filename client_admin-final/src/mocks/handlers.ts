// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const BASE_URL = 'https://shop-demo-api-01.fly.dev';

const handlers = [
  rest.post(`${BASE_URL}/cart/line-items`, (req, res, ctx) => (
    res(ctx.status(201))
  )),
];

export default handlers;
