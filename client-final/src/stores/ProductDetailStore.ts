import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { nullProductDetail, ProductDetail } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  product :ProductDetail = nullProductDetail;

  error = false;

  loading = false;

  async fetchProduct({ productId }:{productId:string}) {
    this.start();
    try {
      const product = await apiService.fetchProduct({ productId });
      this.done(product);
    } catch (err) {
      this.occureError();
    }
  }

  @Action()
  setProduct(product:ProductDetail) {
    this.product = product;
  }

  @Action()
  done(product:ProductDetail) {
    this.product = product;
    this.loading = false;
    this.error = false;
  }

  @Action()
  start() {
    this.product = nullProductDetail;
    this.loading = true;
    this.error = false;
  }

  @Action()
  occureError() {
    this.product = nullProductDetail;
    this.loading = false;
    this.error = true;
  }
}
