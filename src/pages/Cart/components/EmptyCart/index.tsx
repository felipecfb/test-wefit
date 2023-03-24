import { Button } from '../../../../components/Button';
import { Container, Image, Title } from './styles';

export function EmptyCart() {
  return (
    <Container>
      <Title>Parece que não há nada por aqui :(</Title>
      <Image src="./empty-cart.svg" />
      <a href="/">
        <Button title="Voltar" />
      </a>
    </Container>
  );
}
