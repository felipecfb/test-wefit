export type Cart = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  subtotal: string;
};

export interface TableProductsProps {
  cart: Cart[];
  total: string;
  removeProduct: (id: number) => void;
  handleProductIncrement: (productId: number) => void;
  handleProductDecrement: (productId: number) => void;
  handleConfirmOrder: () => void;
}
