import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories:Category[] = [];

  async fetchCategories() {
    const categories = await apiService.fetchCategories();
    this.changeCategories(categories);
  }

  @Action()
  changeCategories(categories:Category[]) {
    this.categories = categories;
  }
}
