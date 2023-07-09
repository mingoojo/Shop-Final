export type Err = {
  name: string;
  message: string;
  stack?: string;
  code? : number
}

export type Category = {
  id: string;
  name: string;
}

export type Image = {
  url: string;
}

export type Product = {
  id: string
  name: string
  price: number
  category: Category
  thumbnail:Image
}

export type ProductOptionItem = {
  id: string;
  name: string;
};

export type ProductOption = {
  id: string;
  name: string;
  items: ProductOptionItem[];
};

export type ProductDetail = {
  id: string;
  category: Category;
  name: string;
  price: number;
  description: string;
  images: Image[];
  options: ProductOption[];
}

export type User = {
  id: string
  name: string,
  email: string
  password: string
}

export type Option = {
  id:string
  name: string
  itemId: string
  itemName: string
}

export type VerifiedData = {
  email: string;
  iat: number;
  exp: number;
}

export type ProductSummary = {
  identifier:string;
  userEmail : string;
  quantity : number;
  unitPrice : number;
  totalPrice : number;
  product: {
    id: string;
    thumbnail: Image;
    name: string;
    options : Option[]
  }
}
