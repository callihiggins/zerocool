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
`;

export const clientDetailsClass = css`
  width: 35%;
  padding-right: 40px;
  border-right: 1px solid ${theme.colors.white};
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
`;

export const clientLogsClass = css`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 65%;
  gap: 40px;
  flex-wrap: wrap;
  img {
    height: 3vw;
    width: auto;
  }
`;