import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const JobsContainer = styled.div`
  width: 100%;
  padding-top: 70px;
  min-height: calc(100vh - 243px);
  background: ${theme.colors.navy};
  color: ${theme.colors.white};

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
  color: ${theme.colors.white};

  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: ${theme.breakpoints.large}px) {
    justify-content: center;
  }
`;

export const textClass = css`
  color: ${theme.colors.blue};
  font-size: 12vw;
  width: 80%;
  text-indent: -140px;
  position: relative;
  margin-left: 135px;
  line-height: 9vw;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    font-size: 60px;
    line-height: 50px;
    text-indent: 0;
    margin: 0 auto;
    padding: 0;
  }
`;

export const headerClass = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.blue};
  padding-top: ${theme.componentHeights.nav}px;
  padding-top: 70px;
  padding-bottom: 20px;
  
  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 40px;
  }

`;

export const descriptionClass = css`
  width: 35%;
  justify-content: space-between;
  font-family: ${theme.fonts.nexaLight};
  font-size: 28px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const jobTitleClass = css`
  text-align: center;
  color: ${theme.colors.white};
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

