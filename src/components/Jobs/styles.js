import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const jobsSectionContainerClass = css`
  width: 100%;
  padding-top: 80px;

`;

export const jobsContainerClass = css`
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

