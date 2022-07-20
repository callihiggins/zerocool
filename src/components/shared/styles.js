import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const titleBannerClass = css`
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.navy};
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin-top: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;

export const hideDesktop = css`
  display: none;
  @media (max-width: ${theme.breakpoints.large}px) {
    display: block;
  }
`;

export const hideMobile = css`
  @media (max-width: ${theme.breakpoints.large}px) {
    display: none !important;
  }
`;