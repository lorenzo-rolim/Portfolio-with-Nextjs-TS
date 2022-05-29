import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${() => css`
    color: ${({ theme }) => theme.colors.secondaryColor};
  `}
`;
