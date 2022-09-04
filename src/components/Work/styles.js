import { css } from '@emotion/react';
import { default as theme } from '../../theme';
import parallax1 from '../../assets/images/parallax1.png';
import parallax2 from '../../assets/images/parallax2.png';

export const sectionContainerClass = css`
  // display: flex;
  color: ${theme.colors.navy};
  height: calc(100vh - 70px);
  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    gap: 20px;
  }

  &:last-child {
    height: calc(100vh - 270px);
  }
`;

export const clientSectionClass = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 80vh;
  background-image: url(${parallax1});
`;

export const awardsSectionClass = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 80vh;
  background-image: url(${parallax2});
`;



export const sideBarClass = css`
  display: flex;
  position: fixed;
  height: calc(100vh - 70px);
  background: ${theme.colors.blue};
  width: 33%;
  align-items: center;
  justify-content: center;
`;

export const sideBarText = css`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.nexaLight};
  font-size: 2.5vw;
  letter-spacing: 3px;
  padding: 40px;

`;

export const sideContainerClass = css`
  width: 67%;
  margin-left: 33%;
`;

export const titleClass = css`
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-size: 40px;
  letter-spacing: 3px;
  background: ${theme.colors.blue};
  padding: 15px;
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
  width: fit-content;
  margin: 20px 0;
  font-family: ${theme.fonts.nexaLight};
  div {
    background: ${theme.colors.green};
    padding: 20px;
    width: auto;
    text-transform: uppercase;
    color: ${theme.colors.white};
    font-size: 50px;
    letter-spacing: 3px;
    font-style: italic;
  }
 
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
  padding-top: 56.25%;
  width: 100%;
`;

export const logosClass = css`
display: flex;
width: 80%;
justify-content: space-around;
margin: 40px auto 0 auto;
align-items: flex-end;
flex-wrap: wrap;
gap: 70px;
align-content: center;
height: calc(100vh - 300px);

img {
  height: 70px;
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
  height: calc(100vh - 300px) !important;
`;