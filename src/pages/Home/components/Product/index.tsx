import { Button } from '../../../../components/Button';
import { useCart } from '../../../../hooks/useCart';
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
  const { cart, addProduct } = useCart();

  const productQuantity = cart.find((item) => item.id === product.id);

  function handleAddProductToCart() {
    addProduct(product);
  }

  return (
    <>
      <ProductCard key={product.id}>
        <ProductImage src={product.image} alt="Imagem do produto" />
        <ProductInfo>
          <Name>{product.title}</Name>
          <Price>{convertToBRL(product.price)}</Price>
        </ProductInfo>
        <Button
          title="Adicionar ao carrinho"
          quantity={productQuantity?.quantity ? productQuantity.quantity : 0}
          shoppingCartButton
          onClick={handleAddProductToCart}
        />
      </ProductCard>
    </>
  );
}
