import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { OrderDetail, nullOrderDetail } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class OrderDetailStore {
  orderDetail:OrderDetail = nullOrderDetail;

  error = false;

  loading = false;

  async fetchOrderDetail({ orderId }:{orderId:string}) {
    this.setLoading(true);
    this.setError(false);
    try {
      const orderDetail = await apiService.fetchOrderDetail({ orderId });
      this.setLoading(false);
      this.setOrderDetail(orderDetail);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setOrderDetail(orderDetail:OrderDetail) {
    this.orderDetail = orderDetail;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }

  @Action()
  setLoading(loading:boolean) {
    this.loading = loading;
  }
}
