import { TableProducts } from './components/TableProducts';
import { Container, Divider } from './styles';

export function Cart() {
  return (
    <Container>
      <TableProducts />
      <Divider />
    </Container>
  );
}
