import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const jobContainerClass = css`
  display: flex;
  gap: 40px;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const titleClass = css`
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: 21px;
  letter-spacing: 3px;
  min-width: 230px;
  max-width: 230px;
  div {
    background: ${theme.colors.blue};
    padding: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    min-width: 100%;

    div {
      padding: 10px 20px;
    }
  } 

`;

export const descriptionClass = css`
  font-family: ${theme.fonts.nexaLight};

  p {
    &:first-child {
      margin-top: 0;
    }
  }
`;