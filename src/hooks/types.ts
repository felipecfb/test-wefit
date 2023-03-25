import { ReactNode } from 'react';
import { IProduct } from '../pages/Home/components/Product/types';

export interface CartProviderProps {
  children: ReactNode;
}

export interface Cart extends IProduct {
  quantity: number;
}

export interface CartContextData {
  cart: Cart[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
  productIncrement: (productId: number) => void;
  productDecrement: (productId: number) => void;
  confirmOrder: () => void;
}
