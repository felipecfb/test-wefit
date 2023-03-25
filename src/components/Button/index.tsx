import { Container, Icon, QuantityWrap, Quantity, Title } from './styles';
import { ButtonProps } from './types';

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
