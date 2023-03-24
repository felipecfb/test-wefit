import { ReactNode } from 'react';
import { Product } from '../pages/Home/components/Product';

export interface CartProviderProps {
  children: ReactNode;
}

export interface Cart extends Product {
  quantity: number;
}

export interface CartContextData {
  cart: Cart[];
  addProduct: (product: Product) => void;
}
