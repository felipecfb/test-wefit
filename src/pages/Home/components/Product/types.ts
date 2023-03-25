export type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export interface ProductCardProps {
  product: IProduct;
}
