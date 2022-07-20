import { css } from '@emotion/react';
import { default as theme } from '../../../../theme'; 
import styled from 'styled-components';

export const NavItem = styled.li`
  text-transform: uppercase;
  margin: 20px 0;
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 16px;
  }

  ${props => props.active && `
  a {
    border-bottom: 2px solid ${theme.colors.blue};
  }
  `}
`;

export const logoContainerClass = css`
  margin-left: 25px;
  display: flex;

`;

export const logoClass = css`
  width: 150px;
  height: auto;
  display: block;
`;

export const navClass = css`
  position: absolute;
  top: 0;
  z-index: 300;
  height: 60px;;
  background: ${theme.colors.navy};
  display: flex;
  justify-content: center;
  width: 100%;
  display: none;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
