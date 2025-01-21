import React, { useState } from 'react';
import Modal from 'react-modal';
import { withTheme } from 'styled-components';
import { Link } from "react-router-dom";
import MobileNav from '../../shared/Nav/MobileNav';
import * as styles from  './styles';
import { NavUl, NavItem, NavEl, HeaderContainer, StyledModal } from './styles';

const scrollIntoView = el => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth' });
   }, 500);
}


const Nav = props => {
	return (
    <>
      <HeaderContainer>
        <NavEl>
          <NavUl>
            <NavItem active={props.active === 'team'}>
              <Link to="/team">Team</Link>
            </NavItem>
            <NavItem active={props.active === 'jobs'} >
              <Link to="/jobs">Jobs</Link>
            </NavItem>
	    <NavItem active={props.active === 'blog'}>
              <a href="https://www.alwaysbeproducing.blog/" target="_blank">Blog</a>
            </NavItem>
            <NavItem active={props.active === 'contact'}>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </NavUl>
        </NavEl>
      </HeaderContainer>
      <MobileNav active={props.active} hideLogo={true}/>
    </>
  )}

Nav.defaultProps = {
  activeLink: 'home',
  fadeIn: false,
}

export default withTheme(Nav);
