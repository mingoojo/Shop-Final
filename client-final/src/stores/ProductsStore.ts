import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { ProductSummary } from '../types';

@singleton()
@Store()
export default class productsStore {
  products:ProductSummary[] = [];

  error = false;

  async fetchProducts({ categoryId }:{categoryId?:string}) {
    this.setError(false);
    try {
      const products = await apiService.fetchProducts({ categoryId });
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
}
