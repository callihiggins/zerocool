import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const aboutContainerClass = css`
  width: 100%;
  padding-top: 80px;
  min-height: calc(100vh - 275px);
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  @media (max-width: ${theme.breakpoints.large}px) {
    min-height: calc(100vh - 240px);
    padding-top: 40px;
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
    padding-top: 0px;
  }

`;

export const descriptionClass = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 35%;
  font-size: 18px;
  justify-content: space-between;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.nexaLight};
  font-size: 28px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const buttonClass = css`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  cursor: pointer;
  padding: 15px 20px;
  box-shadow: none;
  font-size: 18px;
  font-family: ${theme.fonts.nexaLight};
  border: 0;
  text-decoration: none;
  text-align: center;
  border: 1px solid ${theme.colors.white};
  border-radius: 3px;
  width: inherit;
  padding: 10px 20px;

  &:hover {
    text-decoration: none;
    color: ${theme.colors.white};
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