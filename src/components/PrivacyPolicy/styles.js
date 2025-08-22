import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import styled from 'styled-components';

export const PrivacyContainer = styled.div`
  width: 100%;
  padding-top: 70px;
  min-height: calc(100vh - 243px);
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  
  @media (max-width: ${theme.breakpoints.large}px) {
    padding-top: 0;
    min-height: calc(100vh - 240px);
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
    flex-direction: column;
    text-align: center;
  }
`;

export const titleClass = css`
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

export const descriptionClass = css`
  width: 35%;
  justify-content: space-between;
  font-family: ${theme.fonts.nexaLight};
  font-size: 2vw;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const contentContainerClass = css`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  font-family: ${theme.fonts.nexaLight};
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
    padding: 20px 0;
  }
`;

export const effectiveDateClass = css`
  font-size: 18px;
  color: ${theme.colors.blue};
  margin-bottom: 30px;
  font-family: ${theme.fonts.nexaBold};
`;

export const sectionClass = css`
  margin-bottom: 40px;
  
  h1 {
    color: ${theme.colors.blue};
    font-size: 48px;
    font-family: ${theme.fonts.nexaBold};
    margin-bottom: 20px;
    letter-spacing: 1px;
    
    @media (max-width: ${theme.breakpoints.large}px) {
      font-size: 36px;
    }
  }
  
  h2 {
    color: ${theme.colors.blue};
    font-size: 28px;
    font-family: ${theme.fonts.nexaBold};
    margin: 30px 0 15px 0;
    letter-spacing: 0.5px;
    
    @media (max-width: ${theme.breakpoints.large}px) {
      font-size: 24px;
    }
  }
  
  h3 {
    color: ${theme.colors.white};
    font-size: 22px;
    font-family: ${theme.fonts.nexaBold};
    margin: 25px 0 10px 0;
    
    @media (max-width: ${theme.breakpoints.large}px) {
      font-size: 20px;
    }
  }
  
  p {
    font-size: 16px;
    margin-bottom: 20px;
    
    @media (max-width: ${theme.breakpoints.large}px) {
      font-size: 15px;
    }
  }
  
  ul {
    margin: 20px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
      font-size: 16px;
      
      @media (max-width: ${theme.breakpoints.large}px) {
        font-size: 15px;
      }
    }
  }
  
  strong {
    font-family: ${theme.fonts.nexaBold};
    color: ${theme.colors.white};
  }
  
  em {
    font-style: italic;
    color: ${theme.colors.blue};
  }
  
  a {
    color: ${theme.colors.blue};
    text-decoration: none;
    font-family: ${theme.fonts.nexaBold};
    
    &:hover {
      color: ${theme.colors.white};
      text-decoration: underline;
    }
  }
  
  hr {
    border: none;
    border-top: 1px solid ${theme.colors.blue};
    margin: 40px 0;
    opacity: 0.5;
  }
`;
