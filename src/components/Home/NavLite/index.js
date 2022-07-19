import React, { useState } from 'react';
import Modal from 'react-modal';
import { withTheme } from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import MobileNav from './MobileNav';
import * as styles from  './styles';
import { NavUl, NavItem, NavEl, HeaderContainer, StyledModal } from './styles';

const scrollIntoView = el => {
  setTimeout(() => {
    el.scrollIntoView({ behavior: 'smooth' });
   }, 500);
}


const Nav = props => {
  const [showAbout, setShowAbout] = useState(false);
  const [showMovement, setshowMovement] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement('#root')
  
  function openModal() {
    console.log('open')
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
	return (
    <>
      <HeaderContainer>
        <NavEl>
          <NavUl>
            <NavItem active={props.active === 'jobs'}>
              <a href="/jobs">Jobs</a>
            </NavItem>
            <NavItem active={props.active === 'team'} >
              <a href="/team">Team</a>
            </NavItem>
            <NavItem active={props.active === 'contact'}>
              <a href="/contact">Contact</a>
            </NavItem>
          </NavUl>
        </NavEl>
      </HeaderContainer>
      <MobileNav active={props.active}/>
    </>
  )}

Nav.defaultProps = {
  activeLink: 'home',
  fadeIn: false,
}

export default withTheme(Nav);