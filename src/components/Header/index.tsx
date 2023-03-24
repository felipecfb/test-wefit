import { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
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
  const { cart } = useCart();

  const cartQuantity = cart.length;

  return (
    <Container>
      <Logo>WeMovies</Logo>

      <Cart>
        <CartInfo>
          <Title>Meu Carrinho</Title>
          <Quantity>
            {cartQuantity === 1
              ? `${cartQuantity} item`
              : `${cartQuantity} itens`}
          </Quantity>
        </CartInfo>
        <CartImage src="./cart.svg" />
      </Cart>
    </Container>
  );
}
