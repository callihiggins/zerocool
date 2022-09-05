import { css } from '@emotion/react';
import { default as theme } from '../../theme';

export const contactContainerClass = css`
  width: 100%;
  padding-top: 80px;
  min-height: calc(100vh - 275px);

  @media (max-width: ${theme.breakpoints.large}px) {
    min-height: calc(100vh - 240px);
    padding-top: 40px;
  }
`;

export const textClass = css`
  color: ${theme.colors.navy};
  font-size: 12vw;
  width: 80%;
  text-indent: -140px;
  position: relative;
  margin-left: 135px;
  line-height: 9vw;
  padding-top: 70px;
  padding-bottom: 20px;
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
  margin: 0 auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.navy};
  
  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const subHeaderClass = css`
  font-family: ${theme.fonts.nexaLight};
  padding: 15px 0;
  font-size: 28px;
  text-align: right;

  @media (max-width: ${theme.breakpoints.large}px) {
    text-align: left;
  }
`;

export const formContainerClass = css`
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
  color: ${theme.colors.navy};
  font-family: ${theme.fonts.nexaLight};
  border: 1px solid  ${theme.colors.navy};
  border-radius: 3px;
  padding: 20px;

  label {
    display: block;
    font-weight: 700;
    padding-bottom: 7px;
    white-space: pre-wrap;

    span {
      padding-top: 4px;
      font-weight: 400;
      font-size: 12px;
      color: rgba(15,15,15,0.8);
      display: block;
    }
  }

  input {
    font-family: ${theme.fonts.nexaLight};
    margin-bottom: 40px;
    padding: 7px 14px;
    padding-left: 2px;
    border: 0;
    border-bottom: 1px solid ${theme.colors.navy};
    width: 100%;
    border-radius: 30x;
    font-size: 16px;
    box-sizing: border-box;
    &:focus {
      outline: 0;
    }
  }

  textarea {
    height: 100px;
    font-family: ${theme.fonts.nexaLight};
    font-size: 16px;
    border: 1px solid ${theme.colors.navy};
    border-radius: 3px;
    padding-left: 5px;
    resize: none;
    margin-bottom: 25px;
    padding: 7px 14px;
    padding-left: 4px;
    border-bottom: 1px solid ${theme.colors.navy};
    width: 100%;
    border-radius: 30x;
    box-sizing: border-box;
    &:focus {
      outline: 0;
    }
  }

  button {
    padding: 7px 10px;
    background: ${theme.colors.navy};
    border-radius: 3px;
    color: ${theme.colors.white};
    outline: 0;
    box-shadow: none;
    border: 1px solid #000000;
    font-size: 18px;
    cursor: pointer;
    margin-top: 25px;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 80%;
  }
`;

export const successClass = css`
  padding: 15px;
  text-align: center;
`;

