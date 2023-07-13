import axios from 'axios';

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

class ApiService {
  private instance = axios.create({
    baseURL: apiBaseUrl,
  });

  private accessToken = '';

  setAccessToken(accessToken:string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance = axios.create({
      baseURL: apiBaseUrl,
      headers: { Authorization: authorization },
    });

    this.accessToken = accessToken;
  }

  async fetchCurrentUser():Promise<{
    email: string;
    iat: number;
    exp: number;
  }> {
    const { data } = await this.instance.get('/users/me');
    return data;
  }

  async fetchLogin({ email, password }:{email:string, password:string}):Promise<string> {
    const { data } = await this.instance.post('/login', {
      email, password,
    });
    const { accessToken } = data;
    return accessToken;
  }

  fetcher() {
    return async (url: string) => {
      const { data } = await this.instance.get(url);
      return data;
    };
  }
}

const apiService = new ApiService();
export default apiService;
