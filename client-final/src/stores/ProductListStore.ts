import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductListStore {
  products:ProductSummary[] = [];

  error = false;

  loading = false;

  async fetchProductList({ categoryId }:{categoryId?:string}) {
    this.setLoading(true);
    this.setError(false);
    try {
      const products = await apiService.fetchProducts({ categoryId });
      this.setLoading(false);
      this.setProducts(products);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setProducts(products:ProductSummary[]) {
    this.products = products;
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
