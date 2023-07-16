export type User = {
  name: string;
  email: string;
}

export type Category = {
  id: string;
  name: string;
  hidden : boolean
}

export type Order = {
  id: string,
  title: string,
  totalPrice: number,
  status: string,
  orderedAt: string,
  email:string
}

export type ProductOptionItem = {
  name: string;
};

export type CartProductOption = {
  kind: string;
  items: ProductOptionItem;
};

export type CartProductSum = {
  id: string
  name: string
  productId:string
  image: string
  category: Category
  options: CartProductOption[]
  quantity:number
  unitPrice:number
  totalPrice: number
};

export type Receiver = {
  name: string
  address1: string
  address2: string
  postalCode: string
  phoneNumber: string
}

export type OrderDetail = {
  id: string
  transactionId: string
  email:string
  cartItem: CartProductSum[]
  totalPrice: number
  receiver : Receiver
  status : string
}
