import { screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { render } from '../../utils/test-helpers';
import OrderInfomation from './OrderInfomation';

const context = describe;

describe('OrderInfomation', () => {
  context('when orderDetail is exist', () => {
    it('render the text', () => {
      const [orderDetail] = fixtures.orderDetail;
      render(<OrderInfomation orderDetail={orderDetail} />);

      screen.getByText('주문 정보');
    });
  });
});
