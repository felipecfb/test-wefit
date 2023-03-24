import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 0;

  button {
    max-width: 180px;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--blue-950);
`;

export const Image = styled.img``;
