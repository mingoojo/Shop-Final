import axios from 'axios';
import {
  CartProduct,
  Category, OrderDetail,
  OrderSummary, ProductDetail,
  ProductSelectedOption, ProductSummary, Receiver,
} from '../types';

const apiBaseUrl = 'https://shop-server-c5a87aadc0f3.herokuapp.com';

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

  async fetchSignup({ email, password, name }:{
    email:string, password:string, name:string}):Promise<string> {
    const { data } = await this.instance.post('/signup', {
      email, password, name,
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

  async fetchProductDetail({ productId }:{productId:string}):Promise<ProductDetail> {
    const { data } = await this.instance.get(`/products/${productId}`);
    const { productDetail } = data;
    return productDetail;
  }

  async addProductToCart({ productId, options, quantity }:{
    productId:string, options:ProductSelectedOption[], quantity:number, }):Promise<void> {
    await this.instance.post('/cart', { productId, options, quantity });
  }

  async fetchCart():Promise<CartProduct[]> {
    const { data } = await this.instance.get('/cart');
    const { cartItems } = data;
    return cartItems;
  }

  async fetchDeleteCart():Promise<void> {
    await this.instance.post('/cart/delete');
  }

  async fetchOrders():Promise<OrderSummary[]> {
    const { data } = await this.instance.get('/orders');
    const { orders } = data;
    return orders;
  }

  async fetchOrderDetail({ orderId }:{orderId:string}):Promise<OrderDetail> {
    const { data } = await this.instance.get(`/orders/${orderId}`);
    const { orderDetail } = data;
    return orderDetail;
  }

  async fetchOrder({
    merchantId, transactionId, cart, totalPrice, receiver,
  }:{
    merchantId:string,
    transactionId:string,
    cart:CartProduct[],
    totalPrice:number,
    receiver:Receiver
  }):Promise<void> {
    await this.instance.post('/order', {
      merchantId, transactionId, cart, totalPrice, receiver,
    });
  }
}

const apiService = new ApiService();
export default apiService;
