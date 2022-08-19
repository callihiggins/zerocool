import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const contactContainerClass = css`
  height: calc(100vh - (${theme.componentHeights.footer}px + ${theme.componentHeights.nav}px));
  padding: 40px;
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
`;

export const textClass = css`
  color: ${theme.colors.blue};
  font-size: 15vw;
  width: 60%;
  text-indent: -150px;
  position: relative;
  margin-left: 100px;
  line-height: 12vw;
  padding-top: ${theme.componentHeights.nav}px;

`;

export const buttonContainerClass = css`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const buttonClass = css`
  background: ${theme.colors.white};
  color: ${theme.colors.navy};
  cursor: pointer;
  padding: 15px 20px;
  box-shadow: none;
  font-size: 18px;
  font-family: ${theme.fonts.nexaLight};
  border: 0;
  text-decoration: none;
  text-align: center;
`;

