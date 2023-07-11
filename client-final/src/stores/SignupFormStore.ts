import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class SignupFormStore {
  name = '';

  email = '';

  password = '';

  passwordConfirmation = '';

  accessToken = '';

  error = false;

  async fetchSignup() {
    try {
      const accessToken = await apiService.fetchSignup(
        { email: this.email, password: this.password, name: this.name },
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
  changeName(name:string) {
    this.name = name;
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
  changePasswordConfirmation(passwordConfirmation:string) {
    this.passwordConfirmation = passwordConfirmation;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }

  @Action()
  reset() {
    this.name = '';
    this.email = '';
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
