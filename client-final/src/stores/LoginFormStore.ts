import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class LoginFormStore {
  email = '';

  password = '';

  error = false;

  accessToken = '';

  async login() {
    try {
      const accessToken = await apiService.login({
        email: this.email,
        password: this.password,
      });
      this.setAccessToken(accessToken);
    } catch (err) {
      this.setError();
    }
  }

  @Action()
  changeEmail(payload: string) {
    this.email = payload;
  }

  @Action()
  changePassword(payload: string) {
    this.password = payload;
  }

  @Action()
  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  @Action()
  setError() {
    this.error = true;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.error = false;
    this.accessToken = '';
  }

  get valid() {
    return this.email.includes('@') && !!this.password;
  }
}
