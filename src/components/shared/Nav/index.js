import React, { useState } from 'react';
import { css } from '@emotion/react';
import { withTheme } from 'styled-components';
import { Link } from "react-router-dom";
import MobileNav from './MobileNav';
import logo from '../../../assets/images/logo_horionztal_white_text.png';
import * as styles from  './styles';
import * as sharedstyles from  '../../shared/styles';
import { NavToggleEl, NavUl, NavItem, NavEl, HeaderContainer, StyledModal } from './styles';

const Nav = props => {

	return (
    <NavToggleEl isOnHome={props.isOnHome}>
      <HeaderContainer>
        <div css={styles.logoContainerClass}>
          <a href="/">
            <img src={logo} alt="Zerocool" css={styles.logoClass}/>
          </a>
        </div>
        <NavEl>
          <NavUl>
            <NavItem active={props.active === 'team'} >
              <Link to="/team">Team</Link>
            </NavItem>
            <NavItem active={props.active === 'Blog'}>
              <a href="/https://www.alwaysbeproducing.blog/">Blog</a>
            </NavItem>
            <NavItem active={props.active === 'jobs'}>
              <Link to="/jobs">Jobs</Link>
            </NavItem>
            <NavItem active={props.active === 'contact'}>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavUl>
        </NavEl>
        
      </HeaderContainer>
      <MobileNav active={props.active}/>
    </NavToggleEl>
  )}

export default Nav;