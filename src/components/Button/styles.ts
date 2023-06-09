import styled from 'styled-components';

interface ButtonProps {
  background?: string;
}

export const Container = styled.button`
  background: ${(props: ButtonProps) =>
    props.background ? props.background : 'var(--blue-500)'};
  padding: 11px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;

  border: none;
  border-radius: 4px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Icon = styled.img`
  width: 12px;
`;

export const Quantity = styled.p`
  font-size: 0.75rem;
  color: var(--white);
`;

export const Title = styled.p`
  font-size: 0.75rem;
  color: var(--white);
  font-weight: 700;
  text-transform: uppercase;
`;
