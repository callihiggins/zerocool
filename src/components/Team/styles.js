import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const aboutContainerClass = css`
  width: 100%;
  padding-top: 80px;
  min-height: calc(100vh - 275px);

  @media (max-width: ${theme.breakpoints.large}px) {
    min-height: calc(100vh - 240px);
  }
`;

export const peopleContainerClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px 0 40px;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  gap: 40px;

  // PUT IN WHEN THERE ARE MORE PEOPLE
  // &:after {
  //   content: "";
  //   flex: auto;
  // }

  @media (max-width: ${theme.breakpoints.large}px) {
    justify-content: center;
  }
`;

export const teamBannerClass = css`
  text-align: center;
  text-transform: uppercase;
  color: ${theme.colors.navy};
  font-size: 22px;
  letter-spacing: 1.5px;
  font-weight: 400;
  margin-top: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
  }
`;