import { Container, Icon, QuantityWrap, Quantity, Title } from './styles';

interface ButtonProps {
  title: string;
  quantity?: number;
  shoppingCartButton?: boolean;
  onClick?: () => void;
}

export function Button({
  title,
  quantity,
  shoppingCartButton,
  onClick
}: ButtonProps) {
  return (
    <Container onClick={onClick}>
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
