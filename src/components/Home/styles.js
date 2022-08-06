import { css } from '@emotion/react';
import { default as theme } from '../../theme';

export const scrollOverClass = css`
  background: ${theme.colors.navy};
  height: 140vh;
  z-index: 10;
  position: relative;
  padding-top: 150px;
`;