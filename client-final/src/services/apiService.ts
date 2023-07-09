import axios from 'axios';
import {
  Cart, Category, ProductDetail, ProductSummary,
} from '../types';

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

  async login({ email, password }:{email : string, password:string}):Promise<string> {
    const { data } = await this.instance.post('/login', { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    const { accessToken } = data;
    return accessToken;
  }

  async signup({ email, password, name }:{
    email:string, password:string, name:string}):Promise<string> {
    const { data } = await this.instance.post('/signup', { email, password, name }, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    const { accessToken } = data;
    return accessToken;
  }

  async fetchCategories():Promise<Category[]> {
    const { data } = await this.instance.get('/categories');
    const { categories } = data;
    return categories;
  }

  async fetchProducts({ categoryId }:{categoryId?:string}):Promise<ProductSummary[]> {
    const { data } = await this.instance.get('/products', {
      params: { categoryId },
    });
    const { products } = data;
    return products;
  }

  async fetchProduct({ productId }:{productId:string}):Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    const { product } = data;
    return product;
  }

  async fetchCart():Promise<Cart> {
    const { data } = await this.instance.get('/cart');
    const { cartItem } = data;
    return cartItem;
  }

  async addProductToCart({ productId, options, quantity }:{
    productId:string
    quantity:number
    options:{
      id: string,
      name : string,
      itemId: string;
      itemName : string;
    }[]
  }):Promise<void> {
    await this.instance.post('/cart/line-items', {
      productId, options, quantity,
    });
  }
}

const apiService = new ApiService();
export default apiService;
