import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
`;

export const Head = styled.thead`
  text-align: left;
`;

export const HeadRow = styled.tr`
  padding: 1rem;
  margin: 1rem;
`;

export const HeadColumn = styled.th`
  color: var(--gray-500);
  padding-bottom: 21px;
  text-transform: uppercase;
`;

export const Body = styled.tbody``;

export const BodyRow = styled.tr``;

export const BodyColumn = styled.td``;

export const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3.25rem;
`;

export const Image = styled.img`
  max-width: 89px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.p`
  color: var(--gray-900);
  font-size: 0.875rem;
  font-weight: 700;
`;

const Price = styled.p`
  color: var(--gray-900);
  font-size: 1rem;
  font-weight: 700;
`;

export const ProductPrice = styled(Price)``;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const button = styled.button`
  border: none;
  background: transparent;
`;

export const MinusIcon = styled(button)``;

export const Quantity = styled.input`
  padding: 3.5px 1rem;

  font-size: 0.875rem;
  color: var(--gray-900);

  border: 1px solid var(--gray-300);
  border-radius: 4px;
`;

export const PlusIcon = styled(button)``;

export const Subtotal = styled(Price)``;

export const RemoveIcon = styled(button)``;
