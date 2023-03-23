import { Container, Icon, QuantityWrap, Quantity, Title } from './styles';

interface ButtonProps {
  title: string;
  quantity: number;
}

export function Button({ title, quantity }: ButtonProps) {
  return (
    <Container>
      <QuantityWrap>
        <Icon src="./shopping-cart.svg" />
        <Quantity>{quantity}</Quantity>
      </QuantityWrap>
      <Title>{title}</Title>
    </Container>
  );
}
