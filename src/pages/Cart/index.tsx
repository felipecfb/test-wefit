import { Button } from '../../components/Button';
import { TableProducts } from './components/TableProducts';
import { Container, Divider, Footer, Total, TotalWrap } from './styles';

export function Cart() {
  return (
    <Container>
      <TableProducts />
      <Divider />
      <Footer>
        <Button title="Finalizar pedido" />
        <TotalWrap>
          <span>Total</span>
          <Total>R$ 9,99</Total>
        </TotalWrap>
      </Footer>
    </Container>
  );
}
