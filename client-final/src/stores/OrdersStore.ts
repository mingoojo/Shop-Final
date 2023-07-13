import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { OrderSummary } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class OrdersStore {
  orders:OrderSummary[] = [];

  error = false;

  async fetchOrders() {
    this.setError(false);
    try {
      const orders = await apiService.fetchOrders();
      this.setOrders(orders);
    } catch (error) {
      this.setError(true);
    }
  }

  @Action()
  setOrders(orders:OrderSummary[]) {
    this.orders = orders;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }
}
