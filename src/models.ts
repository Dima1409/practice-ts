export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICart {
  id: number,
  userId: number,
  date: Date,
  products: {
    productId: number;
    quantity: number;
  }[];
}