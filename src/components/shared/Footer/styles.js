import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const containerClass = css`
  color: ${theme.colors.navy};
  font-size: 14px;
  position: relative;
  z-index: 100;
  padding-bottom: 20px;
  font-family: ${theme.fonts.nexaLight};

  a {
    text-decoration: none;
    color: ${theme.colors.navy};
  }
`;

export const horizontalLineClass = css`
  width: 95%;
  height: 40px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.colors.navy};
`;

export const bottomContainerClass = css`
  display: flex;
  width: 95%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 25px 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const logoClass = css`
  width: 100px;
`;

export const rightSideClass = css`
  display: flex;
  flex-wrap: wrap;
`;

export const leftSideClass = css`
  display: flex;
  justify-content: space-between;
`;