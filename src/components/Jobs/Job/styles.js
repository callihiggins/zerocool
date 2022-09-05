import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const jobContainerClass = css`
  display: flex;
  gap: 40px;
  color: ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const titleClass = css`
  text-transform: uppercase;
  color: ${theme.colors.navy};
  font-size: 21px;
  letter-spacing: 3px;
  min-width: 230px;
  max-width: 230px;
  align-self: flex-start;
  position: sticky;
  top: 110px;

  div {
    background: ${theme.colors.blue};
    padding: 20px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    min-width: 100%;
    position: static;

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