import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class LoginFormStore {
  email = '';

  password = '';

  accessToken = '';

  error = false;

  async fetchLogin() {
    try {
      const accessToken = await apiService.fetchLogin(
        { email: this.email, password: this.password },
      );
      this.setAccessToken(accessToken);
    } catch (err) {
      this.setError(true);
    }
  }

  @Action()
  setAccessToken(accessToken:string) {
    this.accessToken = accessToken;
  }

  @Action()
  changeEmail(email:string) {
    this.email = email;
  }

  @Action()
  changePassword(password:string) {
    this.password = password;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }

  @Action()
  reset() {
    this.email = '';
    this.password = '';
    this.error = false;
    this.accessToken = '';
  }

  get valid() {
    return this.email.includes('@')
      && this.password.length >= 4;
  }
}
