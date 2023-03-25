export interface ButtonProps {
  title: string;
  quantity?: number;
  shoppingCartButton?: boolean;
  onClick?: () => void;
  background?: string;
}
