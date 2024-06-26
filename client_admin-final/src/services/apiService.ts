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

  async createCategory({ name }:{name:string}):Promise<void> {
    await this.instance.post('/categories', { name });
  }

  async updateCategory({ categoryId, name, hidden }:{
    categoryId:string, hidden:boolean, name:string}):Promise<void> {
    await this.instance.post('/categories/edit', { name, categoryId, hidden });
  }

  fetcher() {
    return async (url: string) => {
      const { data } = await this.instance.get(url);
      return data;
    };
  }

  async updateOrder({ orderId, status }: {
    orderId: string;
    status: string;
  }) {
    await this.instance.post(`/orders/${orderId}`, { status });
  }
}

const apiService = new ApiService();
export default apiService;
