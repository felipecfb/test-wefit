import { useState } from 'react';
import { Button } from '../../../../components/Button';
import { useCart } from '../../../../hooks/useCart';
import { convertToBRL } from '../../../../utils/convertToBRL';
import { ProductCard, ProductImage, ProductInfo, Name, Price } from './styles';
import { ProductCardProps } from './types';

export function Product({ product }: ProductCardProps) {
  const [textButton, setTextButton] = useState('Adicionar ao carrinho');
  const [backgroundButton, setBackgroundButton] = useState('var(--blue-500)');

  const { cart, addProduct } = useCart();

  const productQuantity = cart.find((item) => item.id === product.id);

  function handleAddProductToCart() {
    addProduct(product);

    setTextButton(
      productQuantity?.quantity! >= 1 ? 'Itens adicionados' : 'Item adicionado'
    );
    setBackgroundButton('var(--green)');
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
          title={textButton}
          quantity={productQuantity?.quantity ? productQuantity.quantity : 0}
          shoppingCartButton
          onClick={handleAddProductToCart}
          background={backgroundButton}
        />
      </ProductCard>
    </>
  );
}
