import { css } from '@emotion/react';
import { default as theme } from '../../theme';

export const scrollOverClass = css`
  background: ${theme.colors.navy};
  z-index: 10;
  position: relative;
  overflow-x: hidden;
`;

export const homeContainerClass = css`
  @media (max-width: ${theme.breakpoints.large}px) {
    background: ${theme.colors.navy};
  }
`;

