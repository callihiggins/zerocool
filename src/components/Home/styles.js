import { css } from '@emotion/react';
import { default as theme } from '../../theme';

export const containerClass = css`
  display: flex;

  @media (max-width: ${theme.breakpoints.large}px) {
    background: ${theme.colors.navy};
    height: 100vh;
  }
`;

export const logoBlockClass = css`
  z-index: 5;
  width: 100%;

  @media (max-width: ${theme.breakpoints.large}px) {
    padding: 0 15px;
  }
`;

export const trailerBlockClass = css`
  width: 55%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const logoContainerClass = css`
  text-align: center;
  margin-top: 12vh;
  position: relative;
`;

export const logoClass = css`
 width: 35%;
 @media (max-width: ${theme.breakpoints.large}px) {
  width: 90%;
 }
`;

export const taglineClass = css`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 5vh;
  color: ${theme.colors.white};
  line-height: 26px;

  @media (max-width: ${theme.breakpoints.large}px) {
    font-size: 17px;
  }
`;

export const navClass = css`
  position: absolute;
  text-align: center;
  width: 40%;
  bottom: 20px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
    bottom: 15vh;
  }
`;

export const trailerCTAClass = css`
  font-weight: 700;
  color: ${theme.colors.white};
  width: 100%;
  font-family: ${theme.fonts.nexaBold};
  justify-content: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  border: 0;
  z-index: 10;
  outline: 0;
  margin-top: 3vh; 
  font-size: 16px;
`;

export const playerButtonClass = css`
  width: 40px;
  display: inline-block;
  margin-right: 15px;

  @media (max-width: ${theme.breakpoints.large}px) {
    svg {
      stroke: ${theme.colors.white};
      fill: ${theme.colors.white};

      path {
        stroke: ${theme.colors.white};
        fill: ${theme.colors.white};
      }
    }
  }
`;

export const modalClass = css`
  height: 88vh;
  background: black;
`;

export const videoOverlayClass = css`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.65);
  position: absolute;
  top: 0;
  z-index: 3;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const videoPlayerClass = css`
  position: fixed;
  transform: translateZ(0);
  top: 0;
  z-index: 0;

  @media (min-aspect-ratio: 16/9) {
    width: 100vw;
    height: auto;
  }

  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`;

export const arrowUpClass = css`
  position: absolute;
  bottom: 40px;
  left: calc(50% - 20px);
  width: 0; 
  height: 0; 
  border-color: ${theme.colors.white} transparent;
	border-style: solid;
	border-width: 0px 20px 20px 20px;
	height: 0px;
	width: 0px;
  z-index: 5;
`;

export const bottomBarClass = css`
  background: ${theme.colors.white};
  height: 40px;
  position: absolute;
  bottom: 0px;
  z-index: 5;
  width: 100%;
`;

export const clientLogsClass = css`
  display: flex;
  width: 70%;
  justify-content: space-around;
  margin: 12vh auto 0 auto;
  align-items: flex-end;

  img {
    height: 35px;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-wrap: wrap;
    gap: 15px;
    width: 90%;

    img {
      height: 25px;
    }
  }
`;