import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { OrderSummary } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class OrderListStore {
  orders:OrderSummary[] = [];

  error = false;

  loading = false;

  async fetechOrders() {
    this.setLoading(true);
    this.setError(false);
    try {
      const orders = await apiService.fetchOrders();
      this.setOrders(orders);
      this.setLoading(false);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setOrders(orders:OrderSummary[]) {
    this.orders = orders;
  }

  @Action()
  setLoading(loading:boolean) {
    this.loading = loading;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }
}
