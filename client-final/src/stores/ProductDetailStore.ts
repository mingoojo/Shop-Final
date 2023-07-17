import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { nullProductDetail, ProductDetail } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  product:ProductDetail = nullProductDetail;

  error = false;

  loading = false;

  async fetchProductDetail({ productId }: {productId:string}) {
    this.setError(false);
    this.setLoading(true);
    try {
      const prodcut = await apiService.fetchProductDetail({ productId });
      this.setProduct(prodcut);
      this.setLoading(false);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setProduct(product:ProductDetail) {
    this.product = product;
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
