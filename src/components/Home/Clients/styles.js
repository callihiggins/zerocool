import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const clientsContainerClass = css`
  display: flex;
  gap: 40px;
  border-top: 1px solid ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.white};
  width: 80%;
  margin: 0 auto;
  height: 42.5vh;
  box-sizing: border-box;
  align-items: center;
  margin-top: 10vh;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const clientDetailsClass = css`
  width: 35%;
  padding-right: 40px;
  border-right: 1px solid ${theme.colors.white};

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    border-right: 0;
    padding-right: 0;
    text-align: center;
    padding-top: 25px;
  }
`;

export const headerClass = css`
  color: ${theme.colors.blue};
  font-size: 6.5vw;
  line-height: 5vw;
`;

export const clientDescriptionClass = css`
  color: ${theme.colors.white};
  margin-top: 15px;
  font-family: ${theme.fonts.nexaLight};

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const clientLogsClass = css`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 65%;
  gap: 30px;
  flex-wrap: wrap;
  img {
    height: 3vw;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    img {
      height: 8vw;
    }
  }
`;