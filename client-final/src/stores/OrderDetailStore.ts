import { Action, Store } from 'usestore-ts';
import { singleton } from 'tsyringe';
import { OrderDetail, nullOrderDetail } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class OrderDetailStore {
  orderDetail:OrderDetail = nullOrderDetail;

  error = false;

  async fetchOrderDetail({ orderId }:{orderId:string}) {
    this.setError(false);
    try {
      const orderDetail = await apiService.fetchOrderDetail({ orderId });
      this.setOrderDetail(orderDetail);
    } catch (error) {
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
}
