import { container } from 'tsyringe';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import OrderListView from './OrderListView';
import OrderListStore from '../../stores/OrderListStore';

const context = describe;

describe('OrderListView', () => {
  context('when the Loading is ture', () => {
    it('render the "loading" text', () => {
      const store = container.resolve(OrderListStore);
      store.setLoading(true);
      render(<OrderListView />);

      screen.getByText(/loading.../);
    });
  });

  context('when the Error is ture', () => {
    it('render the "Error" text', () => {
      const store = container.resolve(OrderListStore);
      store.setLoading(false);
      store.setError(true);
      render(<OrderListView />);

      screen.getByText(/error!/);
    });
  });

  context('when the orders is empty', () => {
    it('render nothing', () => {
      const store = container.resolve(OrderListStore);
      store.setLoading(false);
      store.setError(false);
      store.setOrders([]);
      const Container = render(<OrderListView />).container;

      expect(Container).toBeEmptyDOMElement();
    });
  });
});
