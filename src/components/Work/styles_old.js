
import { css } from '@emotion/react';
import { default as theme } from '../../theme';

export const sectionContainerClass = css`
  display: flex;
  color: ${theme.colors.navy};
  height: calc(100vh - 70px);
  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const titleClass = css`
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: 50px;
  letter-spacing: 3px;
  background: ${theme.colors.blue};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.large}px) {
    min-width: 100%;

    div {
      padding: 10px 20px;
    }
  } 

`;

export const headerClass = css`

  div {
    background: ${theme.colors.blue};
    padding: 20px;
    width: auto;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: 50px;
    letter-spacing: 3px;
  }
 
`;

export const clientsClass = css`
  width: 50%;
`;

export const festivalsClass = css`
  width: 50%;
`;

export const workContainerClass = css`
  margin: 0 auto;
  padding-top: 70px;
  // min-height: calc(100vh - 275px);

  @media (max-width: ${theme.breakpoints.large}px) {
    min-height: calc(100vh - 240px);
  }
`;

export const trailerContainerClass = css`
  position: relative;
  padding-top: 38%;
  width: 100%;
  background: #000000;
`;

export const logosClass = css`
display: flex;
width: 45%;
justify-content: space-around;
margin: 40px auto 0 auto;
align-items: flex-end;
flex-wrap: wrap;
gap: 40px;

img {
  height: 45px;
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

export const laurelsSectionClass = css`
  display: flex;
  height: calc(100vh - 240px) !important;
`;