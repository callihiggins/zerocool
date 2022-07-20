import { css } from '@emotion/react';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

export const PersonContainer = styled.div`
  order: ${props => props.order};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  flex-basis: 21%;
  width: 200px;
  text-align: center;
  color: ${theme.colors.navy};

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-basis: 100%;
  }
`;

export const photoClass = css`
  height: 200px;
  img {
    width: 200px;
  }
`;

export const titleClass = css`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 12px;
  color: ${theme.colors.navy};
  border-bottom: 1px solid ${theme.colors.navy};
  text-align: right;
`;


export const Name = styled.div`
  font-size: 14px;
  padding: 10px 0;
  color: ${theme.colors.navy};
  text-align: right;
  text-transform: uppercase;
`;

export const ModalName = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 14px;
  color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.white};
  width: 300px;
  text-transform: ${props => 
    props.name === 'AVA DuVERNAY' ? 'none' : 'uppercase'
  }
`;

export const modalTitleClass = css`
  font-size: 12px;
  padding-top: 10px;
  color: ${theme.colors.navy};
  margin-bottom: 20px;
`;

export const bottomBlockClass = css`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.blue};
  padding-right: 10px;
  padding-left: 10px;
  width: 180px;
  margin: 0 auto
`;

export const modalContainerClass = css`
  color: ${theme.colors.white};
  font-weight: 700;
  display: flex;
  padding-top: 50px;
  justify-content: space-evenly;

  @media (max-width: ${theme.breakpoints.large}px) {
    flex-direction: column;
    justify-content: center;
  }

`;

export const bioClass = css`
  width: 60%;
  padding-top: 70px;
  max-width: 600px;
  line-height: 20px;

  a {
    color: ${theme.colors.white};
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  }
`;

export const modalPhotoClass = css`
  img {
    width: 300px;
  }
`;

export const leftSideClass = css `
  width: 300px;

  @media (max-width: ${theme.breakpoints.large}px) {
    width: 90%;
  } 
`;