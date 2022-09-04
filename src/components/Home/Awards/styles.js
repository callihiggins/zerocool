import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const awardsContainerClass = css`
  display: flex;
  gap: 40px;
  border-top: 1px solid ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.white};
  width: 80%;
  margin: 0 auto;
  height: 42.5vh;
  box-sizing: border-box;
  align-items: center;
`;

export const awardDetailsClass = css`
  width: 35%;
  padding-right: 40px;
  border-right: 1px solid ${theme.colors.white};
`;

export const headerClass = css`
  color: ${theme.colors.blue};
  font-size: 6.5vw;
`;

export const awardDescriptionClass = css`
  color: ${theme.colors.white};
  margin-top: 15px;
  font-family: ${theme.fonts.nexaLight};
`;

export const awardLogsClass = css`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 65%;
  gap: 40px;
  flex-wrap: wrap;
  img {
    height: 5vw;
    width: auto;
  }
`;