export type Err = {
  name: string;
  message: string;
  stack?: string;
  code? : number
}

export type Receiver = {
  name: string
  address1: string
  address2: string
  postalCode: string
  phoneNumber: string
}

export type User = {
  id: string
  name: string,
  email: string
  password: string
}

export type Admin = {
  id: string
  name: string,
  email: string
  password: string
}

export type Category = {
  id: string;
  name: string;
}

export type Product = {
  id: string
  name: string
  price: number
  image: string
  category: Category
}

export type ProductOptionItem = {
  name: string;
};

export type ProductOption = {
  kind: string;
  items: ProductOptionItem[];
};

export type CartProductOption = {
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

export type CartProduct = {
  id: string
  indicator : string
  email : string
  name: string
  productId:string
  image: string
  category: Category
  options: CartProductOption[]
  quantity:number
  unitPrice:number
  totalPrice: number
};

export type VerifiedData = {
  email: string;
  iat: number;
  exp: number;
}

export type Order = {
  id: string,
  title: string,
  totalPrice: number,
  status: string,
  orderedAt: string,
  email:string
}

export type OrderDetail = {
  id: string
  transactionId: string
  email:string
  cartItem: CartProductSum[]
  totalPrice: number
  receiver : Receiver
}

// export type ProductDetail = {
//   id: string;
//   category: Category;
//   name: string;
//   price: number;
//   description: string;
//   images: Image[];
//   options: ProductOption[];
// }

// export type Option = {
//   id:string
//   name: string
//   itemId: string
//   itemName: string
// }

// export type ProductSummary = {
//   identifier:string;
//   userEmail : string;
//   quantity : number;
//   unitPrice : number;
//   totalPrice : number;
//   product: {
//     id: string;
//     thumbnail: Image;
//     name: string;
//     options : Option[]
//   }
// }

// export type OrderSummary = {
//   id:string
//   title:string
//   totalPrice: string
//   status: string
//   orderedAt: string
//   orderUser:string
// }

// export type OrderDetail = {
//   id:string
//   title:string
//   totalPrice: string
//   status: string
//   orderedAt: string
//   orderUser:string
//   receiver:{
//     name: string
//     address1: string
//     address2: string
//     postalCode: string
//     phoneNumber: string
//   }
//   orderItems:{
//     id: string;
//     thumbnail: Image;
//     name: string;
//     options : Option[]
//   }[]
// }
