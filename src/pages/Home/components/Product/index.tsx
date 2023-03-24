import { Button } from '../../../../components/Button';
import { convertToBRL } from '../../../../utils/convertToBRL';
import { ProductCard, ProductImage, ProductInfo, Name, Price } from './styles';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: Product;
}

export function Product({ product }: ProductCardProps) {
  return (
    <>
      <ProductCard key={product.id}>
        <ProductImage src={product.image} alt="Imagem do produto" />
        <ProductInfo>
          <Name>{product.title}</Name>
          <Price>{convertToBRL(product.price)}</Price>
        </ProductInfo>
        <Button title="Adicionar ao carrinho" quantity={0} shoppingCartButton />
      </ProductCard>
    </>
  );
}
