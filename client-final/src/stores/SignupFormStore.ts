import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import apiService from '../services/apiService';

@singleton()
@Store()
export default class SignupFormStore {
  email = '';

  password = '';

  passwordConfirmation = '';

  accessToken = '';

  name = '';

  error = false;

  loading = false;

  async fetchSignup() {
    this.setError(false);
    this.setLoading(true);
    try {
      const accessToken = await apiService.fetchSignup({
        email: this.email,
        name: this.name,
        password: this.password,
      });
      this.setAccessToken(accessToken);
      this.setLoading(false);
    } catch (err) {
      this.setError(true);
    }
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
  changePasswordConfirmation(passwordConfirmation : string) {
    this.passwordConfirmation = passwordConfirmation;
  }

  @Action()
  setError(error:boolean) {
    this.error = error;
  }

  @Action()
  setLoading(loading:boolean) {
    this.loading = loading;
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
  reset() {
    this.changeEmail('');
    this.changePassword('');
    this.changePasswordConfirmation('');
    this.setError(false);
    this.setLoading(false);
    this.changeName('');
  }

  get valid() {
    return this.email.includes('@')
    && this.password.length >= 4
    && this.password === this.passwordConfirmation
    && !!this.name;
  }
}
