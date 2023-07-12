import { Action, Store } from 'usestore-ts';
import { singleton } from 'tsyringe';
import { CartProduct } from '../types';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class CartStore {
  cartItem: CartProduct[] = [];

  error = false;

  async fetchCart() {
    this.setError(false);
    try {
      const cartItems = await apiService.fetchCart();
      this.setCartItem(cartItems);
    } catch (error) {
      this.setError(true);
    }
  }

  @Action()
  setCartItem(cartItem: CartProduct[]) {
    this.cartItem = cartItem;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }
}
