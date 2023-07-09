/* eslint-disable no-console */
import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';
import { Category } from '../types';

@singleton()
@Store()
export default class CategoriesStore {
  categories:Category[] = [];

  async fetchCategories() {
    this.setCategories([]);
    try {
      const categories = await apiService.fetchCategories();
      this.setCategories(categories);
    } catch (error) {
      console.log('fetchCategoryError');
    }
  }

  @Action()
  setCategories(categoires:Category[]) {
    this.categories = categoires;
  }
}
