import { css } from '@emotion/react';
import Modal from 'react-modal';
import { default as theme } from '../../../theme';
import styled from 'styled-components';

const duration = '.2s';
const distance = '8px';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

export const HeaderContainer = styled.div`
  display: flex;
  background:  ${props => props.backgroundColor || 'transparent'};
  z-index: 120;
  width: 100%;
  margin-top: 40px;
  justify-content: center;
  position: relative;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  text-transform: uppercase;
  list-style: none;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  width: 100%;
  padding: 0;

  @media (max-width: ${theme.breakpoints.large}px) {
      margin-left: ${props => props.fixedNav ? `62px` : `0`};
      justify-content: space-around;
      align-items: center;
    };
  }

  li {
    width: 120px;
    list-decoration: none;
    cursor: pointer;
    position: relative;
    font-family: ${theme.fonts.nexaLight};
    letter-spacing: 2px;

    a {
      color: ${theme.colors.white};
      font-size: 16px;
      text-decoration: none;
      cursor: pointer;
      position: relative;
      width: auto;
    }
  }
  
`;

export const movementDropdownClass = css`
  width: 100px;
  position: relative;
`;

export const wideLiClass = css`
  width: 200px !important;
  margin-left: -70px;
`;

export const NavEl = styled.nav`
  width: 70%;
  justify-content: space-around;
  display: flex;
  height: 30px;
  @media (max-width: ${theme.breakpoints.large}px) {
    width: 100%;
  }
`;

export const NavItem = styled.li`
  a {
    &:hover {
      color: ${theme.colors.cream} !important;
    }
  }
  list-decoration: none;
  font-weight: ${props => props.active ? '700' : '600'};
  font-size: 12px;
  font-weight: 900;
  color: ${theme.colors.cream};
  cursor: pointer;
  position: relative;
  border-bottom: ${props => props.active ? `1px solid ${theme.colors.cream}` : '0'};

  a {
    color: ${theme.colors.cream};
    text-decoration: none;
    cursor: pointer;
    position: relative;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.large}px) {
    margin:  ${props => props.fixedNav ? `0 6px` : `0 15px`};
    text-align: center;
    border-bottom: none;
    a {
      color: ${theme.colors.white};
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
      background-color: ${theme.colors.green};
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
    background: none;
  }
`;

export const iconClass = css`
  color: ${theme.colors.white};
  font-size: 18px;
  margin: 0 10px;
  font-weight: 700;
`;

export const logoClass = css`
  position: absolute;
  top: 10px;
  left: calc(50% - 50px);
  height: 40px;
  width: 100px;

  @media (max-width: ${theme.breakpoints.large}px) {
    position: absolute;
    top: 15px;
    left: 0;
    width: 33px;
    margin-top: -7px;
    margin-left: 15px;
  }
`;

export const emptySpacerClass = css`
  width: calc(15% - 25px);
  margin-left: 25px;

  @media (max-width: ${theme.breakpoints.large}px) {
    display: none;
  }
`;

export const StyledModal = styled(Modal)`
  z-index: 30000;
  position: absolute;
  background: ${theme.colors.cream};
  border: 1px solid ${theme.colors.navy};
  width: 80%;
  max-width: 500px;
  left: 20%;
  top: 25vh;

  @media (min-width: 1015px) {
    left: calc(50% - 250px);
  }
`;