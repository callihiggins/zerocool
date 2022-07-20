import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const teamContainerClass = css`
  background: ${theme.colors.cream};
`;

export const aboutContainerClass = css`
  width: 100%;
  padding-top: 80px;

  @media (min-width: ${theme.breakpoints.extraLarge}px) {
    max-height: calc(100vh - 135px);
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    height: auto;
    padding-bottom: 40px;
  }
`;

export const peopleContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 0 40px;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.large}px) {
    justify-content: center;
  }

  i {
    flex-basis: 21%;
    width: 200px;
    order: 17;
  }
`;

export const teamBannerClass = css`
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.navy};
  letter-spacing: normal;
  font-size: 22px;
  margin-right: 20px;
  letter-spacing: 1.5px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  position: sticky;
  top: 50px;
  z-index: 5;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;