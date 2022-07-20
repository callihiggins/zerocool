import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const JobsContainer = styled.div`
  width: 100%;
  padding-top: 80px;
  min-height: calc(100vh - 275px);
  ${props => !props.hasJobs && `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
  
  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 0;
    min-height: calc(100vh - 240px);
  }
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

export const jobTitleClass = css`
  text-align: center;
  color: ${theme.colors.navy};
  font-size: 36px;
  letter-spacing: 1.5px;
  font-weight: 400;
  width: 60%;

  @media (max-width: ${theme.breakpoints.large}px) {
    top: 75px;
    font-size: 28px;
    width: 80%;
  }
`;

