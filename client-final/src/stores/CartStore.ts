import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { CartProduct } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class CartStore {
  cart:CartProduct[] = [];

  loading = false;

  error = false;

  async fetchCart() {
    this.setError(false);
    this.setLoading(true);
    try {
      const cart = await apiService.fetchCart();
      this.setCart(cart);
      this.setLoading(false);
    } catch (err) {
      this.setError(true);
    }
  }

  async fetchDeleteCart() {
    this.setError(false);
    try {
      await apiService.fetchDeleteCart();
      this.setCart([]);
    } catch (error) {
      this.setError(true);
    }
  }

  @Action()
  setCart(cart:CartProduct[]) {
    this.cart = cart;
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
