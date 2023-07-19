import { container } from 'tsyringe';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-helpers';
import OrderDetailView from './OrderDetailView';
import OrderDetailStore from '../../stores/OrderDetailStore';

const context = describe;

describe('OrderDetailView', () => {
  context('when loading is true', () => {
    it('render the "loading" text', () => {
      const store = container.resolve(OrderDetailStore);
      store.setLoading(true);
      render(<OrderDetailView />);

      screen.getByText('loading...');
    });
  });
  context('when error is true', () => {
    it('render the "loading" text', () => {
      const store = container.resolve(OrderDetailStore);
      store.setLoading(false);
      store.setError(true);
      render(<OrderDetailView />);

      screen.getByText('error!');
    });
  });
  context('when orderDetail is empty', () => {
    it('render nothing', () => {
      const store = container.resolve(OrderDetailStore);
      store.setLoading(false);
      store.setError(false);
      const Container = render(<OrderDetailView />).container;

      expect(Container).toBeEmptyDOMElement();
    });
  });
});
