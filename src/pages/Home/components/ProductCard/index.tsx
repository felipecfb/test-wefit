import { Button } from '../../../../components/Button';
import { Container, ProductImage, ProductInfo, Name, Price } from './styles';

export function ProductCard() {
  return (
    <Container>
      <ProductImage src="./productImage.svg" />
      <ProductInfo>
        <Name>Viúva Negra</Name>
        <Price>R$ 9,99</Price>
      </ProductInfo>
      <Button title="Adicionar ao carrinho" quantity={0} shoppingCartButton />
    </Container>
  );
}
