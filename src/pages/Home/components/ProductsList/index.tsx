import { useEffect, useState } from 'react';
import { Loading } from '../../../../components/Loading';
import { api } from '../../../../services/api';
import { Product } from '../Product';
import { ProductsContainer } from './styles';

export function ProductsList() {
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(() => {
    api
      .get('/products')
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        throw new Error('Error: ' + err);
      });
  }, []);

  return (
    <>
      {!product ? (
        <Loading />
      ) : (
        <ProductsContainer>
          {product?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsContainer>
      )}
    </>
  );
}
