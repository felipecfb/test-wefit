import { useCart } from '../../hooks/useCart';
import { convertToBRL } from '../../utils/convertToBRL';
import { EmptyCart } from './components/EmptyCart';
import { TableProducts } from './components/TableProducts';
import { Container } from './styles';

export function Cart() {
  const { cart, removeProduct } = useCart();

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: convertToBRL(product.price),
    subtotal: convertToBRL(product.price * product.quantity)
  }));

  const total = convertToBRL(
    cart.reduce((total, product) => total + product.price * product.quantity, 0)
  );

  function handleRemoveProduct(id: number): void {
    removeProduct(id);
  }

  return (
    <Container>
      {cartFormatted.length > 0 ? (
        <TableProducts
          cart={cartFormatted}
          total={total}
          removeProduct={handleRemoveProduct}
        />
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
}
