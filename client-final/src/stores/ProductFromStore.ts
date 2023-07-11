/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
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

  selectedOptionItems: ProductOptionItem[] = [];

  done = false;

  async addToCart() {
    this.resetDone();
    await apiService.addProductToCart({
      productId: this.productId,
      options: this.options.map((option, index) => ({
        kind: option.kind,
        items: this.selectedOptionItems[index],
      })),
      quantity: this.quantity,
    });
    this.complete();
  }

  @Action()
  setProduct(product:ProductDetail) {
    this.product = product;
    this.productId = product.id;
    this.options = product.options;
    this.quantity = 1;
    this.done = false;
    this.selectedOptionItems = this.options.map((option) => (option.items[0]));
  }

  @Action()
  resetDone() {
    this.done = false;
  }

  @Action()
  complete() {
    this.quantity = 1;
    this.done = true;
  }

  @Action()
  changeQuantity(quantity:number) {
    if (quantity <= 0) {
      return;
    }
    if (quantity > 10) {
      return;
    }
    this.quantity = quantity;
  }

  @Action()
  changeSelectedOptionItems({ value, index }:{value:string, index:number}) {
    const establishedItems = this.selectedOptionItems;
    this.selectedOptionItems = establishedItems.map((item, i) => {
      if (i !== index) {
        return item;
      } if (i === index) {
        return { ...item, name: value };
      }
    }) as ProductOptionItem[];
  }

  get price() {
    return this.product.price * this.quantity;
  }
}
