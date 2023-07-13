export type Category = {
  id: string;
  name: string;
}

export type Image = {
  url: string;
}

export type ProductSummary = {
  id: string;
  category: Category;
  image: string;
  name: string;
  price: number;
}

export type ProductOptionItem = {
  name: string;
};

export type ProductOption = {
  kind: string;
  items: ProductOptionItem[];
};

export type ProductSelectedOption = {
  kind: string;
  items: ProductOptionItem;
};

export type ProductDetail = {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: Category
  options: ProductOption[]
}

export const nullProductDetail: ProductDetail = {
  id: '',
  name: '',
  price: 0,
  image: '',
  description: '',
  category: { id: '', name: '' },
  options: [],
};

export type CartProductOption = {
  kind: string;
  items: ProductOptionItem;
};

export type CartProduct = {
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

export type OrderDetail = {
  id: string
  transactionId: string
  email:string
  cartItem: CartProductSum[]
  totalPrice: number
  receiver : Receiver
}

export const nullOrderDetail: OrderDetail = {
  id: '',
  transactionId: '',
  email: '',
  totalPrice: 0,
  receiver: {
    name: '',
    address1: '',
    address2: '',
    postalCode: '',
    phoneNumber: '',
  },
  cartItem: [{
    id: '',
    name: '',
    productId: '',
    image: '',
    category: { id: '', name: '' },
    options: [],
    quantity: 0,
    unitPrice: 0,
    totalPrice: 0,
  }],
};

export type OrderSummary = {
  id: string;
  title: string;
  totalPrice: number;
  status: string;
  orderedAt: string;
}

// export type OrderOptionItem = {
//   name: string;
// };

// export type OrderOption = {
//   name: string;
//   item: OrderOptionItem;
// };

// export type LineItem = {
//   id: string;
//   product: {
//     id: string;
//     name: string;
//   };
//   options: OrderOption[];
//   unitPrice: number;
//   quantity: number;
//   totalPrice: number;
// }

// export type Cart = {
//   lineItems: LineItem[];
//   totalPrice: number;
// }

// export type OrderDetail = {
//   id: string;
//   title: string;
//   lineItems: LineItem[];
//   totalPrice: number;
//   status: string;
//   orderedAt: string;
// }

// export const nullOrderDetail: OrderDetail = {
//   id: '',
//   title: '',
//   lineItems: [],
//   totalPrice: 0,
//   status: '',
//   orderedAt: '',
// };
