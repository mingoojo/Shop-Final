import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories: Category[] = [];

  error = false;

  loading = false;

  async fetchCategories() {
    this.setLoading(true);
    this.setError(false);
    try {
      const categories = await apiService.fetchCategories();
      this.setCategory(categories);
      this.setLoading(false);
      this.setError(false);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setCategory(categories:Category[]) {
    this.categories = categories;
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
