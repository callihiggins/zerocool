import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  color: ${props => props.darkMode ? theme.colors.white : theme.colors.navy};
  background-color: ${props => props.darkMode ? theme.colors.navy : theme.colors.white};
  font-size: 14px;
  position: relative;
  z-index: 100;
  font-family: ${theme.fonts.nexaLight};

  a {
    text-decoration: none;
    color: ${theme.colors.navy};
  }
`;

export const HorizontalLine = styled.div`
  width: 95%;
  height: 40px;
  margin: 0 auto;
  border-bottom: 1px solid ${props => props.darkMode ? theme.colors.white : theme.colors.navy};
`;

export const BottomContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 25px 2.5% 45px 2.5%;
  background: ${props => props.darkMode ? theme.colors.navy : theme.colors.white};
  box-sizing: border-box;

  a {
    color: ${props => props.darkMode ? theme.colors.white : theme.colors.navy};

  }
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const logoClass = css`
  width: 100px;
`;

export const rightSideClass = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: right;
`;

export const leftSideClass = css`
  display: flex;
  justify-content: space-between;
`;