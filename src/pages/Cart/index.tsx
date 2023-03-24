import { useState } from 'react';
import { EmptyCart } from './components/EmptyCart';
import { TableProducts } from './components/TableProducts';
import { Container } from './styles';

export function Cart() {
  return (
    <Container>
      <TableProducts />
    </Container>
  );
}
