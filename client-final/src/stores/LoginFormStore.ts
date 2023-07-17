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

  loading = false;

  async fetchLogin() {
    this.setError(false);
    this.setLoading(true);
    try {
      const accessToken = await apiService.fetchLogin({
        email: this.email,
        password: this.password,
      });
      this.setLoading(false);
      this.setAccessToken(accessToken);
    } catch (err) {
      this.setError(true);
    }
  }

  get valid() {
    return this.email.includes('@')
    && this.password.length >= 4;
  }

  @Action()
  reset() {
    this.changeEmail('');
    this.changePassword('');
    this.setError(false);
    this.setLoading(false);
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
  setAccessToken(accessToken:string) {
    this.accessToken = accessToken;
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
