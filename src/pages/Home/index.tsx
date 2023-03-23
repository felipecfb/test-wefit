import { ProductCard } from './components/ProductCard';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Container>
  );
}
