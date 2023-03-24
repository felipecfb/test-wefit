import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 960px;
  margin: 0 auto;

  padding: 24.5px 0;
`;

export const Logo = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartInfo = styled.section`
  text-align: end;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 0.75rem;
  color: var(--gray-500);
`;

export const CartImage = styled.img`
  width: 32px;
`;
