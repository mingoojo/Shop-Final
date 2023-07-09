import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class SignupFormStore {
  email = '';

  password = '';

  passwordConfirmation = '';

  name = '';

  error = false;

  accessToken = '';

  async signup() {
    try {
      const accessToken = await apiService.signup({
        email: this.email,
        password: this.password,
        name: this.name,
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
  changePasswordConfirmation(password: string) {
    this.passwordConfirmation = password;
  }

  @Action()
  changeName(payload: string) {
    this.name = payload;
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
    this.name = '';
    this.password = '';
    this.passwordConfirmation = '';
    this.error = false;
    this.accessToken = '';
  }

  get valid() {
    return this.email.includes('@')
      && !!this.name
      && this.password.length >= 4
      && this.password === this.passwordConfirmation;
  }
}
