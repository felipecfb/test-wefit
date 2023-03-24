import { Container, Icon, QuantityWrap, Quantity, Title } from './styles';

interface ButtonProps {
  title: string;
  quantity?: number;
  shoppingCartButton?: boolean;
}

export function Button({ title, quantity, shoppingCartButton }: ButtonProps) {
  return (
    <Container>
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
