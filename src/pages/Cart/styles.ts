import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--white);
  border-radius: 4px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 21px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--gray-500);
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    max-width: 235px;
  }
`;

export const TotalWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 0.875rem;
    color: var(--gray-500);
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const Total = styled.p`
  font-size: 1.5rem;
  color: var(--gray-900);
  font-weight: 700;
`;
