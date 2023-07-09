/* eslint-disable no-console */
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { Category, ProductSummary } from '../types';

@singleton()
@Store()
export default class ProductStore {
  products:ProductSummary[] = [];

  loading = false;

  error = false;

  async fetchProducts({ categoryId }:{categoryId?:string}) {
    this.start();
    try {
      const products = await apiService.fetchProducts({ categoryId });
      this.done(products);
    } catch (error) {
      this.occureError();
    }
  }

  @Action()
  start() {
    this.products = [];
    this.error = false;
    this.loading = true;
  }

  @Action()
  done(products:ProductSummary[]) {
    this.products = products;
    this.error = false;
    this.loading = false;
  }

  @Action()
  occureError() {
    this.error = true;
    this.loading = false;
  }
}
