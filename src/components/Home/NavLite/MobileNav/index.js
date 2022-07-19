import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { slide as MobileMenu } from 'react-burger-menu'
import logo from '../../../../assets/images/logo.png';
import * as styles from  './styles';
import * as sharedstyles from  '../../../shared/styles';
import { NavItem } from './styles';
import hamburger from '../../../../assets/images/hamburger_white.svg';
import './menuStyle.scss';

const Nav = props => {
  const [open, setState] = useState(false);

  const closeMenu = () => {
    setState(false);
  };

	return (
    <div css={[sharedstyles.hideDesktop, styles.navClass]}>
      <MobileMenu isOpen={open} customBurgerIcon={ <img src={hamburger} /> } right width={ '70%' } >
        <nav>
          <ul >
            <NavItem onClick={closeMenu} active={props.active === 'team'}>
              <a href="/team">Team</a>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'jobs'}>
              <a href="/jobs">Jobs</a>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'contact'}>
              <a href="/contact">Contact</a>
            </NavItem>
          </ul>
        </nav>
      </MobileMenu>
      
    </div>
  )}

Nav.defaultProps = {
  activeLink: 'home',
  fadeIn: false,
}

export default withTheme(Nav);