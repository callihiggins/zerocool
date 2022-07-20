import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { Link } from "react-router-dom";
import { slide as MobileMenu } from 'react-burger-menu'
import logo from '../../../../assets/images/logo_horionztal_white_text.png';
import * as styles from  './styles';
import * as sharedstyles from  '../../styles';
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
      <div css={styles.logoContainerClass}>
        <a href="/">
          <img src={logo} alt="ZeroCool" css={styles.logoClass}/>
        </a>
      </div>
      <MobileMenu isOpen={open} customBurgerIcon={ <img src={hamburger} /> } right width={ '70%' } >
        <nav>
          <ul >
            <NavItem onClick={closeMenu} active={props.active === 'team'}>
              <Link to="/team">Team</Link>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'jobs'}>
              <Link to="/jobs">Jobs</Link>
            </NavItem>
            <NavItem onClick={closeMenu} active={props.active === 'contact'}>
              <Link to="/contact">Contact</Link>
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