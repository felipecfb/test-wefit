import { Button } from '../../components/Button';
import { Container, Image, Title } from './styles';

export function Checkout() {
  return (
    <Container>
      <Title>Compra realizada com sucesso!</Title>
      <Image src="./success-checkout.svg" />
      <Button title="Voltar" />
    </Container>
  );
}
