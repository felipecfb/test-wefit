import styled from 'styled-components';

export const ProductCard = styled.div`
  padding: 10px 11px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 147px;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 7px 0 8px;
`;

export const Name = styled.p`
  font-size: 0.75rem;
  color: var(--gray-900);
  font-weight: 700;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--blue-950);
`;
