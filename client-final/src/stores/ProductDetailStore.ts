import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { nullProductDetail, ProductDetail, ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductDetailStore {
  productDetail:ProductDetail = nullProductDetail;

  error = false;

  loading = false;

  async fetchProductDetail({ productId }:{productId:string}) {
    this.setError(false);
    this.setLoading(true);
    try {
      const productDetail = await apiService.fetchProductDetail({ productId });
      this.setProducts(productDetail);
      this.setLoading(false);
    } catch (err) {
      this.setError(true);
      this.setLoading(false);
    }
  }

  @Action()
  setProducts(productDetail:ProductDetail) {
    this.productDetail = productDetail;
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
