import { Container, Icon, QuantityWrap, Quantity, Title } from './styles';

interface ButtonProps {
  title: string;
  quantity?: number;
  shoppingCartButton?: boolean;
  onClick?: () => void;
  background?: string;
}

export function Button({
  title,
  quantity,
  shoppingCartButton,
  onClick,
  background
}: ButtonProps) {
  return (
    <Container onClick={onClick} background={background}>
      {shoppingCartButton && (
        <QuantityWrap>
          <Icon src="./shopping-cart.svg" />
          <Quantity>{quantity}</Quantity>
        </QuantityWrap>
      )}
      <Title>{title}</Title>
    </Container>
  );
}
