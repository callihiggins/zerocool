import { css } from '@emotion/react';
import Modal from 'react-modal';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const HeaderContainer = styled.div`
  display: flex;
  background: ${theme.colors.navy};
  z-index: 120;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: center;
  padding: 10px 0;
  justify-content: space-between;
  font-family: ${theme.fonts.nexaLight};
  color: ${theme.colors.white};
  height: 50px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;
  align-items: flex-start;
  text-align: center;
  justify-content: flex-start;
  padding-left: 0;

  @media (max-width: ${theme.breakpoints.large}px) {
      width: ${props => props.fixedNav ? `calc(100% - 62px)` : `100%`};
      margin-left: ${props => props.fixedNav ? `62px` : `0`};
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
    };
  }

  li {
    width: 100px;
    list-decoration: none;
    font-weight: 900;
    font-size: 12px;
    color: ${theme.colors.white};
    cursor: pointer;
    position: relative;

    a {
      color: ${theme.colors.white};
      text-decoration: none;
      cursor: pointer;
      position: relative;
      width: auto;
    }
  }
  
`;

export const NavEl = styled.nav`
  justify-content: space-evenly;
  display: flex;
  height: 30px;
  z-index: -1;
  align-items: center;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const NavItem = styled.li`

  @media (max-width: ${theme.breakpoints.large}px) {
    margin:  ${props => props.fixedNav ? `0 6px` : `0 15px`};
    text-align: center;
    border-bottom: none;
    a {
      color: ${theme.colors.navy};
      &:before,
      &:after {
        display: none;
      }
    }
  }
  a {
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0; right: 0;
      height: 2px;
      background-color: ${theme.colors.blue};
    }
    &:before {
      opacity: 0;
      transform: translateY(- ${distance});
      transition: transform 0s ${easeOutBack}, opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform ${duration} ${easeOutBack}, opacity ${duration};
    }
    &.active,
    &:hover {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform ${duration} ${easeOutBack}, opacity ${duration};
      }
      &:after {
        transition: transform 0s ${duration} ${easeOutBack}, opacity 0s ${duration};
      }
    }
  }

  ${props => props.active && `
    a {
      &:before,
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0; right: 0;
        height: 2px;
        background-color: ${theme.colors.blue};
        opacity: 1;
      }
    }
  `}
`;

export const socialMediaIconsClass = css`
  display: inline-flex;
  justify-content: flex-end;
  text-align: right;
  width: calc(15% - 20px);
  padding-right: 10px;
  align-items: center;

  button {
    cursor: pointer;
  }
`;

export const iconClass = css`
  color: ${theme.colors.navy};
  font-size: 18px;
  font-weight: 700;
  margin: 0 10px;
`;

export const logoClass = css`
  width: 150px;
  height: auto;
  display: block;
`;

export const logoContainerClass = css`
  width: calc(15% - 25px);
  margin-left: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  } 
`;

export const StyledModal = styled(Modal)`
  z-index: 30000;
  position: absolute;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.navy};
  width: 80%;
  max-width: 500px;
  left: 20%;
  top: 25vh;

  @media (min-width: 1015px) {
    left: calc(50% - 250px);
  }
`;