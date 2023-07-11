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

// export type OrderSummary = {
//   id: string;
//   title: string;
//   totalPrice: number;
//   status: string;
//   orderedAt: string;
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
