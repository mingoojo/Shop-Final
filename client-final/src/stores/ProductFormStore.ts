import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import {
  nullProductDetail, ProductDetail, ProductOption, ProductOptionItem,
} from '../types';

@singleton()
@Store()
export default class ProductFormStore {
  product:ProductDetail = nullProductDetail;

  productId = '';

  quantity = 1;

  options:ProductOption[] = [];

  selectedOptionItems:ProductOptionItem[] = [];

  done = false;

  get Price() {
    return this.quantity * this.product.price;
  }

  @Action()
  setProduct(product:ProductDetail) {
    this.product = product;
    this.productId = product.id;
    this.options = product.options;
    this.quantity = 1;
    this.done = false;
    this.selectedOptionItems = product.options.map((option) => (option.items[0]));
  }

  @Action()
  changeQuantity(quantity:number) {
    if (quantity <= 0) {
      return;
    }
    if (quantity >= 10) {
      return;
    }
    this.quantity = quantity;
  }
}
