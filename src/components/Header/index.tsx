import {
  Container,
  Logo,
  Cart,
  CartInfo,
  Title,
  Quantity,
  CartImage
} from './styles';

export function Header() {
  return (
    <Container>
      <Logo>WeMovies</Logo>

      <Cart>
        <CartInfo>
          <Title>Meu Carrinho</Title>
          <Quantity>1 item</Quantity>
        </CartInfo>
        <CartImage src="./cart.svg" />
      </Cart>
    </Container>
  );
}
