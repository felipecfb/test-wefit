import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Product } from './components/Product';
import { ProductsList } from './components/ProductsList';
import { HomeContainer } from './styles';

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get('products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products);

  return (
    <HomeContainer>
      <ProductsList />
    </HomeContainer>
  );
}
